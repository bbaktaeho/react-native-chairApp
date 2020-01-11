/**
 * 실행 방법:
 * - 스마트폰 설정에서 이름이 chairCommunication 블루투스 등록(paired)
 * - 의자소통(example) 애플리케이션 실행
 * - 블루투스 connect
 * 기능:
 * - 블루투스 켜기/끄기
 * - 현재 기기에 paired 된 블루투스 장치 리스트 보기
 * - 블루투스 장치 스캔 하기 (사용 안 함)
 * -
 * 주석:
 * @taeho     새로 추가한 props or states
 * @taeho_num 새로 만든 메서드 (1,2,3 ...)
 */

import React from "react";
import {
  Platform,
  ScrollView,
  Switch,
  Text,
  SafeAreaView,
  View,
  ActivityIndicator,
  Modal,
  TouchableOpacity,
  Alert,
  PermissionsAndroid
} from "react-native";

import Toast from "@remobile/react-native-toast";
import BluetoothSerial, {
  withSubscription
} from "react-native-bluetooth-serial-next";
import { Buffer } from "buffer";

import Button from "../../components/Button";
import DeviceList from "../../components/DeviceList";
import styles from "../../styles/bluetooth_styles";

import MyHeader from "../../components/MyHeader";

global.Buffer = Buffer;

const iconv = require("iconv-lite");

class Bluetooth extends React.Component {
  constructor(props) {
    super(props);
    this.events = null;
    this.isConnected = false; // taeho
    this.realtime = false;
    this.state = {
      // realtime: false, // taeho
      readData: "", // taeho
      isEnabled: false,
      device: null,
      devices: [],
      scanning: false,
      processing: false
    };
  }

  // 연결된 블루투스 디바이스 확인 메서드
  // taeho1
  BlueIsConnected = () => {
    let test = this.state.devices.filter(d => {
      if (d.connected) return true;
      return false;
    });
    if (test.length !== 0) Alert.alert("연결 있다");
    else Alert.alert("연결 없다");
  };

  // 블루투스에서 출력해주는 값을 읽어오는 메서드
  // taeho2
  read = () => {
    BluetoothSerial.readEvery(
      (data, intervalId) => {
        if (!this.isConnected) return;
        this.realtime = true;
        // console.log(` ${data}`); // 로그로 데이터 출력
        this.setState({ readData: data });

        if (this.imBoredNow && intervalId) {
          clearInterval(intervalId);
        }
        this.realtime = false;
      },
      1000, // ms 단위
      "\r\n"
    );
  };

  // 저장된 리스트들 <DiviceList> 에 출력
  listDevices = async () => {
    try {
      const list = await BluetoothSerial.list();
      var temp = [];
      for (let v of list) {
        if (v.name === "chairCommunication") {
          temp = [v];
          break;
        }
      }
      // await console.log(`listDevices: ${temp}`);
      // DL 설명 :
      // const DL = await list.filter(i => {
      //   return i.name === "chairCommunication";
      // });
      // await console.log(DL);
      this.setState(({ devices }) => ({
        // 의자소통 블루투스만 찾는다
        devices: devices.map(device => {
          const found = temp.find(v => v.id === device.id);

          if (found) {
            return {
              ...found,
              paired: true,
              connected: false
            };
          }

          return device;
        })
      }));
    } catch (e) {
      Toast.showShortBottom(e.message);
    }
  };

  async componentDidMount() {
    this.events = this.props.events;

    // 블루투스 검색할 수 있는 permission
    await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION
    ).then(result => {
      if (!result) {
        PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION
        );
      }
    });

    try {
      // 초기 어플 실행 시 작업공간
      // 이 부분 수정하는 데 6시간 걸림
      const [isEnabled, devices] = await Promise.all([
        // paired 가져옴
        BluetoothSerial.isEnabled(),
        BluetoothSerial.list()
      ]);
      // const unPairedDevices = await Promise.all(BluetoothSerial.listUnpaired()); // unPaired 가져옴
      // var realDevices = devices.concat(unPairedDevices);

      // await console.log(`paired: ${devices}`);
      // await console.log(`unPaired: ${unPairedDevices}`);
      // await console.log(`all: ${realDevices}`);

      var temp = [];
      // await console.log(typeof devices[0]);
      for (let v of devices) {
        if (v.name === "chairCommunication") {
          temp = [v];
          break;
        }
      }
      // await console.log(`내가 찾은 값: ${temp}`);

      // for (let i = 0; i < devices.length; i++) {
      //   if (devices[i]) {
      //     devices = [devices[i]];
      //     break;
      //   }
      // }

      this.setState({
        isEnabled,
        devices: temp.map(device => ({
          ...device,
          paired: true,
          connected: false
        }))
      });
    } catch (e) {
      // await console.log(`err2: ${e.message}`);
      Toast.showShortBottom(e.message);
    }

    this.events.on("bluetoothEnabled", () => {
      Toast.showShortBottom("Bluetooth enabled");
      this.setState({ isEnabled: true });
    });

    this.events.on("bluetoothDisabled", () => {
      Toast.showShortBottom("Bluetooth disabled");
      this.setState({ isEnabled: false });
    });

    this.events.on("connectionSuccess", ({ device }) => {
      if (device) {
        Toast.showShortBottom(
          `Device ${device.name}<${device.id}> has been connected`
        );
      }
    });

    this.events.on("connectionFailed", ({ device }) => {
      if (device) {
        Toast.showShortBottom(
          `Failed to connect with device ${device.name}<${device.id}>`
        );
      }
    });

    this.events.on("connectionLost", ({ device }) => {
      if (device) {
        Toast.showShortBottom(
          `Device ${device.name}<${device.id}> connection has been lost`
        );
      }
    });

    this.events.on("data", result => {
      if (result) {
        const { id, data } = result;
        console.log(`Data from device ${id} : ${data}`);
      }
    });

    this.events.on("error", e => {
      if (e) {
        console.log(`Error: ${e.message}`);
        Toast.showShortBottom(e.message);
      }
    });
  }

  requestEnable = () => async () => {
    try {
      await BluetoothSerial.requestEnable();
      this.setState({ isEnabled: true });
    } catch (e) {
      Toast.showShortBottom(e.message);
    }
  };

  // 블루투스 온/오프
  toggleBluetooth = async value => {
    try {
      if (value) {
        await BluetoothSerial.enable();
      } else {
        await BluetoothSerial.disable();
      }
    } catch (e) {
      Toast.showShortBottom(e.message);
    }
  };

  // 저장되지 않은 블루투스 찾기
  discoverUnpairedDevices = async () => {
    this.setState({ scanning: true }); // 스캔 중 표시

    try {
      const unpairedDevices = await BluetoothSerial.listUnpaired(); // 저장되지 않은 블루투스들
      const chairCommunication = await unpairedDevices.find(i => {
        // 우리는 chairCommunication 만 찾으면 됨
        return i.name === "chairCommunication";
      });
      await console.log(unpairedDevices); // 모든 언페어링 log
      // await console.log(chairCommunication); // 의자소통 블루투스 log

      this.setState(({ devices }) => ({
        scanning: false,
        devices: devices
          .map(device => {
            const found = unpairedDevices.find(d => d.id === device.id);

            if (found) {
              return {
                ...device,
                ...found,
                connected: false,
                paired: false
              };
            }

            return device.paired || device.connected ? device : null;
          })
          .map(v => v)
      }));
    } catch (e) {
      Toast.showShortBottom(e.message);

      this.setState(({ devices }) => ({
        scanning: false,
        devices: devices.filter(device => device.paired || device.connected)
      }));
    }
  };

  cancelDiscovery = () => async () => {
    try {
      await BluetoothSerial.cancelDiscovery();
      this.setState({ scanning: false });
    } catch (e) {
      Toast.showShortBottom(e.message);
    }
  };

  toggleDevicePairing = async ({ id, paired }) => {
    if (paired) {
      await this.unpairDevice(id);
    } else {
      await this.pairDevice(id);
    }
  };

  pairDevice = async id => {
    this.setState({ processing: true });

    try {
      const paired = await BluetoothSerial.pairDevice(id);

      if (paired) {
        Toast.showShortBottom(
          `Device ${paired.name}<${paired.id}> paired successfully`
        );

        this.setState(({ devices, device }) => ({
          processing: false,
          device: {
            ...device,
            ...paired,
            paired: true
          },
          devices: devices.map(v => {
            if (v.id === paired.id) {
              return {
                ...v,
                ...paired,
                paired: true
              };
            }

            return v;
          })
        }));
      } else {
        Toast.showShortBottom(`Device <${id}> pairing failed`);
        this.setState({ processing: false });
      }
    } catch (e) {
      Toast.showShortBottom(e.message);
      this.setState({ processing: false });
    }
  };

  unpairDevice = async id => {
    this.setState({ processing: true });

    try {
      const unpaired = await BluetoothSerial.unpairDevice(id);

      if (unpaired) {
        Toast.showShortBottom(
          `Device ${unpaired.name}<${unpaired.id}> unpaired successfully`
        );

        this.setState(({ devices, device }) => ({
          processing: false,
          device: {
            ...device,
            ...unpaired,
            connected: false,
            paired: false
          },
          devices: devices.map(v => {
            if (v.id === unpaired.id) {
              return {
                ...v,
                ...unpaired,
                connected: false,
                paired: false
              };
            }

            return v;
          })
        }));
      } else {
        Toast.showShortBottom(`Device <${id}> unpairing failed`);
        this.setState({ processing: false });
      }
    } catch (e) {
      Toast.showShortBottom(e.message);
      this.setState({ processing: false });
    }
  };

  toggleDeviceConnection = async ({ id, connected }) => {
    if (connected) {
      this.isConnected = false; // 태호
      await this.disconnect(id);
    } else {
      this.isConnected = true; // 태호
      await this.connect(id);
      await this.read(); // 태호
    }
  };

  connect = async id => {
    this.setState({ processing: true });

    try {
      const connected = await BluetoothSerial.device(id).connect();

      if (connected) {
        Toast.showShortBottom(
          `Connected to device ${connected.name}<${connected.id}>`
        );

        this.setState(({ devices, device }) => ({
          processing: false,
          device: {
            ...device,
            ...connected,
            connected: true
          },
          devices: devices.map(v => {
            if (v.id === connected.id) {
              return {
                ...v,
                ...connected,
                connected: true
              };
            }

            return v;
          })
        }));
      } else {
        Toast.showShortBottom(`Failed to connect to device <${id}>`);
        this.setState({ processing: false });
      }
    } catch (e) {
      Toast.showShortBottom(e.message);
      this.setState({ processing: false });
    }
  };

  disconnect = async id => {
    this.setState({ processing: true });

    try {
      await BluetoothSerial.device(id).disconnect();

      this.setState(({ devices, device }) => ({
        processing: false,
        device: {
          ...device,
          connected: false
        },
        devices: devices.map(v => {
          if (v.id === id) {
            return {
              ...v,
              connected: false
            };
          }

          return v;
        })
      }));
      this.realtime = false; // taeho
    } catch (e) {
      Toast.showShortBottom(e.message);
      this.setState({ processing: false });
    }
  };

  write = async (id, message) => {
    try {
      await BluetoothSerial.device(id).write(message);
      Toast.showShortBottom("Successfuly wrote to device");
    } catch (e) {
      Toast.showShortBottom(e.message);
    }
  };

  writePackets = async (id, message, packetSize = 64) => {
    try {
      const device = BluetoothSerial.device(id);
      const toWrite = iconv.encode(message, "cp852");
      const writePromises = [];
      const packetCount = Math.ceil(toWrite.length / packetSize);

      for (var i = 0; i < packetCount; i++) {
        const packet = new Buffer(packetSize);
        packet.fill(" ");
        toWrite.copy(packet, 0, i * packetSize, (i + 1) * packetSize);
        writePromises.push(device.write(packet));
      }

      await Promise.all(writePromises).then(() =>
        Toast.showShortBottom("Writed packets")
      );
    } catch (e) {
      Toast.showShortBottom(e.message);
    }
  };

  renderModal = (device, processing) => {
    if (!device) return null;

    const { id, name, paired, connected } = device;

    return (
      <Modal
        animationType="fade"
        transparent={false}
        visible={true}
        onRequestClose={() => {}}
      >
        {device ? (
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>{name}</Text>
            <Text style={{ fontSize: 14 }}>{`<${id}>`}</Text>

            {processing && (
              <ActivityIndicator
                style={{ marginTop: 15 }}
                size={Platform.OS === "ios" ? 1 : 60}
              />
            )}

            {!processing && (
              <View style={{ marginTop: 20, width: "50%" }}>
                {Platform.OS !== "ios" && (
                  <Button
                    title={paired ? "Unpair" : "Pair"}
                    style={{
                      backgroundColor: "#22509d"
                    }}
                    textStyle={{ color: "#fff" }}
                    onPress={() => this.toggleDevicePairing(device)}
                  />
                )}
                <Button
                  title={connected ? "Disconnect" : "Connect"}
                  style={{
                    backgroundColor: "#22509d"
                  }}
                  textStyle={{ color: "#fff" }}
                  onPress={() => this.toggleDeviceConnection(device)}
                />
                {connected && (
                  <React.Fragment>
                    <Button
                      title="Write"
                      style={{
                        backgroundColor: "#22509d"
                      }}
                      textStyle={{ color: "#fff" }}
                      onPress={() =>
                        this.write(
                          id,
                          "This is the test message\r\nDoes it work?\r\nTell me it works!\r\n"
                        )
                      }
                    />
                    <Button
                      title="Write packets"
                      style={{
                        backgroundColor: "#22509d"
                      }}
                      textStyle={{ color: "#fff" }}
                      onPress={() =>
                        this.writePackets(
                          id,
                          "This is the test message\r\nDoes it work?\r\nTell me it works!\r\n"
                        )
                      }
                    />
                  </React.Fragment>
                )}
                <Button
                  title="Close"
                  onPress={() => this.setState({ device: null })}
                />
              </View>
            )}
          </View>
        ) : null}
      </Modal>
    );
  };
  render() {
    const { isEnabled, device, devices, scanning, processing } = this.state;

    return (
      <View style={{ flex: 1 }}>
        <MyHeader
          title="블루투스 연결"
          navigation={this.props.navigation}
          type="setting"
          right={() => (
            <View style={styles.enableInfoWrapper}>
              <Text style={{ fontSize: 14, color: "black", paddingRight: 10 }}>
                {isEnabled ? "ON" : "OFF"}
              </Text>
              <Switch onValueChange={this.toggleBluetooth} value={isEnabled} />
            </View>
          )}
        ></MyHeader>
        {devices.length == 0 && (
          <View>
            <Text>블루투스를 등록 후 사용해주세요.</Text>
            <Text>스마트폰에서 등록 후 재 실행하면 됩니다</Text>
          </View>
        )}

        {/* 스캔 중이지 않다면 DeviceList 를 띄움 */}
        {/* 스캔 중 이라면 descover more 가 클릭된거임 */}
        {scanning ? (
          // 스캔 중 이였을 때
          isEnabled && (
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <ActivityIndicator
                style={{ marginBottom: 15 }}
                size={Platform.OS === "ios" ? 1 : 60}
              />

              <Button
                textStyle={{ color: "#fff" }}
                style={styles.buttonRaised}
                title="Cancel Discovery"
                onPress={this.cancelDiscovery}
              />
            </View>
          )
        ) : (
          // 스캔하지 않았을 때
          <React.Fragment>
            {this.renderModal(device, processing)}
            <DeviceList
              devices={devices}
              onDevicePressed={device => this.setState({ device })}
              onRefresh={this.listDevices}
            />
          </React.Fragment>
        )}

        {/* 하단의 스캔 버튼 */}
        <View style={styles.footer}>
          <ScrollView vertical contentContainerStyle={styles.fixedFooter}>
            {this.realtime && <Text>{this.state.readData}</Text>}
            {!this.realtime && <Text>데이터 통신 테스트</Text>}

            {/* <Button title="의자소통 블루투스 찾기" onPress={this.listDevices} /> */}

            {/* 스마트폰의 블루투스가 켜져있을 때 */}
            {/* {isEnabled && ( */}
            {/* <Button */}
            {/* title="Discover more" */}
            {/* onPress={this.discoverUnpairedDevices} */}
            {/* /> */}
            {/* )} */}
            {/* 스마트폰의 블루투스가 꺼져있을 때 */}
            {/* {!isEnabled && ( */}
            {/* <Button title="Request enable" onPress={this.requestEnable} /> */}
            {/* )} */}
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default withSubscription({ subscriptionName: "events" })(Bluetooth);
