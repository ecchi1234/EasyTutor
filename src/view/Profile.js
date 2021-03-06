import React from "react";

import { Text, Avatar } from "react-native-paper";
import { FontAwesome } from "@expo/vector-icons";

import {
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Image,
  TouchableOpacity,
} from "react-native";

import { colors } from "../asset/color";

export default Profile = (props) => {
  const generalInformation = React.useMemo(() => {
    return (
      <>
        <View style={{ padding: 20 }}>
          <View
            style={{ backgroundColor: "#fff", padding: 20, borderRadius: 10 }}
          >
            <Text
              style={{
                color: colors.primary_information_text_color,
                marginBottom: 10,
              }}
              theme={{
                fonts: {
                  regular: {
                    fontFamily: "MontserratBold",
                    fontWeight: "normal",
                  },
                },
              }}
            >
              Gioi thieu ban than
            </Text>
            <Text style={{ fontSize: 11, color: "#C4C4C4" }}>
              Hi, My name is Tony Stark! I'm from California, USA. I'm seasoned
              professional with 12+ years of experience web and mobile UI/UX
              design, 4 years of Product Design, 8+ years team management in
              own, international and California, USA companies.
            </Text>
            <TouchableOpacity>
              <View
                style={{
                  backgroundColor: colors.backgroundColor,
                  borderRadius: 5,
                  padding: 5,
                }}
              >
                <Text
                  style={{ color: colors.darker_green_color, fontSize: 10 }}
                  theme={{
                    fonts: {
                      regular: {
                        fontFamily: "MontserratBold",
                        fontWeight: "normal",
                      },
                    },
                  }}
                >
                  More
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ padding: 20 }}>
          <View
            style={{ backgroundColor: "#fff", padding: 20, borderRadius: 10 }}
          >
            <Text
              style={{
                color: colors.primary_information_text_color,
                marginBottom: 10,
              }}
              theme={{
                fonts: {
                  regular: {
                    fontFamily: "MontserratBold",
                    fontWeight: "normal",
                  },
                },
              }}
            >
              Thong tin gia su
            </Text>
            <View>
              <View>
                <View>
                  <Text
                    style={{ fontSize: 12 }}
                    theme={{
                      fonts: {
                        regular: {
                          fontFamily: "MontserratBold",
                          fontWeight: "normal",
                        },
                      },
                    }}
                  >
                    Mon hoc: <Text>Toan hoc</Text>
                  </Text>
                </View>

                <View>
                  <Text
                    style={{ fontSize: 12 }}
                    theme={{
                      fonts: {
                        regular: {
                          fontFamily: "MontserratBold",
                          fontWeight: "normal",
                        },
                      },
                    }}
                  >
                    Khoi lop: <Text>Cap 1</Text>
                  </Text>
                </View>
              </View>

              <View>
                <Text
                  style={{ fontSize: 12 }}
                  theme={{
                    fonts: {
                      regular: {
                        fontFamily: "MontserratBold",
                        fontWeight: "normal",
                      },
                    },
                  }}
                >
                  Dia chi:{" "}
                  <Text style={{ color: colors.primary_color }}>
                    144 Xu??n Th???y, C???u Gi???y, H?? N???i
                  </Text>
                </Text>
              </View>

              <View>
                <Text
                  style={{ fontSize: 12 }}
                  theme={{
                    fonts: {
                      regular: {
                        fontFamily: "MontserratBold",
                        fontWeight: "normal",
                      },
                    },
                  }}
                >
                  Hoc phi mot buoi:{" "}
                  <Text
                    style={{ color: colors.yellow_color }}
                    theme={{
                      fonts: {
                        regular: {
                          fontFamily: "MontserratBold",
                          fontWeight: "normal",
                        },
                      },
                    }}
                  >
                    160. 000 vn??
                  </Text>
                </Text>
              </View>
            </View>
          </View>
        </View>
      </>
    );
  }, []);

  const reviewInformation = React.useMemo(() => {
    return (
      <>
        <View style={{ padding: 20 }}>
          <View
            style={{ backgroundColor: "#fff", padding: 20, borderRadius: 10 }}
          >
            <View style={{ marginBottom: 25 }}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={{
                    color: colors.primary_information_text_color,
                  }}
                  theme={{
                    fonts: {
                      regular: {
                        fontFamily: "MontserratBold",
                        fontWeight: "normal",
                      },
                    },
                  }}
                >
                  Nhan xet
                </Text>
                <Text style={{ fontSize: 12 }}>1 binh luan</Text>
              </View>
              <View style={[styles.informationUnderline]}></View>
            </View>

            <View style={{ flexDirection: "row" }}>
              <View style={{}}>
                <Avatar.Image
                  source={require("../asset/review-avatar.png")}
                  size={35}
                />
              </View>

              <View
                style={{
                  marginLeft: 7,
                  width: "86%",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{ fontSize: 11 }}
                    theme={{
                      fonts: {
                        regular: {
                          fontFamily: "MontserratBold",
                          fontWeight: "normal",
                        },
                      },
                    }}
                  >
                    Tran Thi B
                  </Text>
                  <View style={{ flexDirection: "row" }}>
                    <FontAwesome
                      name="star"
                      size={15}
                      color={colors.yellow_color}
                    />
                    <FontAwesome
                      name="star"
                      size={15}
                      color={colors.yellow_color}
                    />
                    <FontAwesome
                      name="star"
                      size={15}
                      color={colors.yellow_color}
                    />
                    <FontAwesome
                      name="star"
                      size={15}
                      color={colors.yellow_color}
                    />
                    <FontAwesome
                      name="star"
                      size={15}
                      color={colors.yellow_color}
                    />
                  </View>
                </View>
                <View>
                  <Text style={{ fontSize: 11 }}>Day rat hay!</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </>
    );
  }, []);

  const profileTabReducer = (state, action) => {
    switch (action.type) {
      case "GENERAL": {
        return {
          information: generalInformation,
          tab: "general",
        };
      }

      case "REVIEW": {
        return {
          information: reviewInformation,
          tab: "review",
        };
      }
    }
  };

  const [informationBlock, dispatch] = React.useReducer(profileTabReducer, {
    information: generalInformation,
    tab: "general",
  });

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          backgroundColor: colors.primary_color,
          justifyContent: "center",
          alignItems: "center",
          borderBottomLeftRadius: 30,
          borderBottomRightRadius: 30,
          padding: 20,
          paddingTop: StatusBar.currentHeight + 10,
          flexDirection: "row",
          position: "relative",
        }}
      >
        <View style={{ position: "absolute", left: 20, bottom: 25 }}>
          <TouchableOpacity>
            <Image
              source={require("../asset/white-back-button.png")}
              style={{
                width: 15,
                height: 15,
                marginRight: 6,
                marginLeft: 5,
              }}
            />
          </TouchableOpacity>
        </View>

        <Text
          style={{ color: "#fff" }}
          theme={{
            fonts: {
              regular: {
                fontFamily: "MontserratBold",
                fontWeight: "normal",
              },
            },
          }}
        >
          Ho so gia su
        </Text>
      </View>
      <ScrollView style={styles.scrollView}>
        <View>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#fff",
              paddingBottom: 20,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 20,
                position: "relative",
                marginBottom: 40,
              }}
            >
              <Avatar.Image
                size={140}
                source={require("../asset/avatar.png")}
              />
              <TouchableOpacity>
                <Avatar.Icon
                  style={{
                    backgroundColor: colors.primary_color,
                    marginLeft: 10,
                    position: "absolute",
                  }}
                  color={"#fff"}
                  size={30}
                  icon={require("../asset/edit-button.png")}
                />
              </TouchableOpacity>
            </View>

            <View
              style={{
                borderRadius: 15,
                backgroundColor: "#fff",
                width: "25%",
                justifyContent: "center",
                alignItems: "center",
                position: "absolute",
                top: 130,
              }}
            >
              <Text
                style={{ color: colors.primary_information_text_color }}
                theme={{
                  fonts: {
                    regular: {
                      fontFamily: "MontserratBold",
                      fontWeight: "normal",
                    },
                  },
                }}
              >
                4.5/5
              </Text>
              <Text
                style={{ fontSize: 9, color: colors.tab_color }}
                theme={{
                  fonts: {
                    regular: {
                      fontFamily: "MontserratBold",
                      fontWeight: "normal",
                    },
                  },
                }}
              >
                Danh gia
              </Text>
            </View>
            <Text
              theme={{
                fonts: {
                  regular: {
                    fontFamily: "MontserratBold",
                    fontWeight: "normal",
                  },
                },
              }}
            >
              Nguyen Thi B
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={require("../asset/location.png")}
                style={{
                  width: 10,
                  height:
                    (10 *
                      Image.resolveAssetSource(require("../asset/location.png"))
                        .height) /
                    Image.resolveAssetSource(require("../asset/location.png"))
                      .width,
                  marginRight: 6,
                }}
              />
              <Text style={{ color: colors.tab_color, fontSize: 10 }}>
                Kyiv, Ukraine
              </Text>
            </View>
            <View style={{ flexDirection: "row", marginTop: 10 }}>
              <View>
                <TouchableOpacity
                  onPress={() => {
                    dispatch({
                      type: "GENERAL",
                    });
                  }}
                >
                  <View
                    style={{
                      backgroundColor:
                        informationBlock.tab === "general"
                          ? colors.primary_color
                          : "#F3F1F1",
                      padding: 5,
                      borderRadius: 15,
                      paddingHorizontal: 30,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 10,
                        color:
                          informationBlock.tab === "general"
                            ? "#fff"
                            : colors.primary_information_text_color,
                      }}
                      theme={{
                        fonts: {
                          regular: {
                            fontFamily: "MontserratBold",
                            fontWeight: "normal",
                          },
                        },
                      }}
                    >
                      General
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={{ width: "10%" }}></View>
              <View>
                <TouchableOpacity
                  onPress={() => {
                    dispatch({
                      type: "REVIEW",
                    });
                  }}
                >
                  <View
                    style={{
                      backgroundColor:
                        informationBlock.tab === "review"
                          ? colors.primary_color
                          : "#F3F1F1",
                      padding: 5,
                      borderRadius: 15,
                      paddingHorizontal: 30,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 10,
                        color:
                          informationBlock.tab === "review"
                            ? "#fff"
                            : colors.primary_information_text_color,
                      }}
                      theme={{
                        fonts: {
                          regular: {
                            fontFamily: "MontserratBold",
                            fontWeight: "normal",
                          },
                        },
                      }}
                    >
                      Review
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {informationBlock.information}
        </View>
      </ScrollView>
      <View style={{ padding: 20, paddingTop: 0 }}>
        <TouchableOpacity onPress={() => console.log("bilobilo")}>
          <View
            style={{
              backgroundColor: colors.primary_color,
              borderRadius: 7,
              justifyContent: "center",
              alignItems: "center",
              padding: 10,
            }}
          >
            <Text
              style={{ color: "#fff" }}
              theme={{
                fonts: {
                  regular: {
                    fontFamily: "MontserratBold",
                    fontWeight: "normal",
                  },
                },
              }}
            >
              Moi day
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background_color,
  },
  scrollView: {
    // paddingHorizontal: 10,
  },
  text: {
    fontSize: 42,
  },
  informationBlock: {
    backgroundColor: "#fff",
    borderRadius: 10,
    marginTop: 10,
    padding: 20,
  },
  informationTitle: {
    marginBottom: 10,
  },
  informationTitleText: {
    color: colors.primary_information_text_color,
  },
  informationUnderline: {
    backgroundColor: colors.primary_color,
    height: 2,
    width: "10%",
  },
  addressText: {
    color: colors.primary_color,
  },
  costText: {
    color: colors.yellow_color,
  },
});
