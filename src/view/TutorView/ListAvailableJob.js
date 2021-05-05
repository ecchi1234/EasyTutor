import React from "react";

import {
  View,
  StatusBar,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";

import {
  Text,
  Searchbar,
  Card,
  Title,
  Paragraph,
  Avatar,
  Button,
} from "react-native-paper";
import { colors } from "../../asset/color";

const RightContent = (props) => {
  return (
    <TouchableOpacity>
      <View style={{ marginRight: 20 }}>
        <Avatar.Icon
          icon={"star"}
          size={30}
          color={colors.tab_color}
          style={{ backgroundColor: colors.background_color }}
        />
      </View>
    </TouchableOpacity>
  );
};

const ApplyButton = (props) => {
  return (
    <Button
      mode={"contained"}
      style={{ backgroundColor: colors.primary_color, borderRadius: 15 }}
      labelStyle={{ color: "#fff", fontSize: 10 }}
      onPress={() => console.log("press")}
      icon={"school"}
    >
      Ung tuyen
    </Button>
  );
};

export default ListAvailableJob = (props) => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              marginTop: StatusBar.currentHeight + 10,
            }}
          >
            <View style={{ width: "78%", alignSelf: "center" }}>
              <Searchbar
                placeholder="Search For Jobs..."
                onChangeText={onChangeSearch}
                value={searchQuery}
                style={{
                  borderRadius: 20,
                  borderColor: "#F0F0F0",
                  elevation: 0,
                  borderWidth: 1,
                }}
                selectionColor={colors.primary_color}
                iconColor={colors.primary_color}
                inputStyle={{ fontSize: 12 }}
                placeholderTextColor={colors.tab_color}
              />
            </View>
            <View style={{ marginLeft: 10 }}>
              <TouchableOpacity>
                <View>
                  <Image
                    source={require("../../asset/filter.png")}
                    style={{ width: 20, height: 20 }}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>

          <View
            style={{ paddingHorizontal: 25, marginTop: 15, marginBottom: 15 }}
          >
            <View>
              <Text
                style={{ fontSize: 13 }}
                theme={{
                  fonts: {
                    regular: {
                      fontFamily: "MontserratSemiBold",
                      fontWeight: "normal",
                    },
                  },
                }}
              >
                Yeu cau phu hop voi ban
              </Text>
            </View>

            <View style={{ marginTop: 15 }}>
              <Card style={{ borderRadius: 12 }}>
                <Card.Title
                  title="Hourly - Posted 2 hours ago"
                  subtitle="Day toan cho be"
                  right={RightContent}
                  titleStyle={{
                    fontSize: 8,
                    fontFamily: "MontserratSemiBold",
                    fontWeight: "normal",
                    color: colors.tab_color,
                    padding: 0,
                    lineHeight: 10,
                    textAlignVertical: "bottom",
                  }}
                  subtitleStyle={{
                    fontSize: 13,
                    fontFamily: "MontserratSemiBold",
                    fontWeight: "normal",
                    color: colors.primary_color,
                  }}
                />
                <Card.Content>
                  <View style={{ flexDirection: "row" }}>
                    <View
                      style={{
                        backgroundColor: colors.background_color,
                        justifyContent: "center",
                        alignItems: "center",
                        padding: 8,
                        borderRadius: 12,
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 10,
                          fontFamily: "MontserratBold",
                          fontWeight: "normal",
                        }}
                      >
                        Ha Noi
                      </Text>
                    </View>

                    <View
                      style={{
                        backgroundColor: colors.background_color,
                        justifyContent: "center",
                        alignItems: "center",
                        padding: 8,
                        borderRadius: 10,
                        marginHorizontal: 12,
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 10,
                          fontFamily: "MontserratBold",
                          fontWeight: "normal",
                        }}
                      >
                        Ha Noi
                      </Text>
                    </View>

                    <View
                      style={{
                        backgroundColor: colors.background_color,
                        justifyContent: "center",
                        alignItems: "center",
                        padding: 8,
                        borderRadius: 12,
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 10,
                          fontFamily: "MontserratBold",
                          fontWeight: "normal",
                        }}
                      >
                        Offline
                      </Text>
                    </View>
                  </View>
                  <Paragraph
                    style={{
                      fontSize: 11,
                      color: colors.secondary_information_text_color,
                    }}
                  >
                    I am looking for a Co-Founder to join me visualize an idea
                    to fruition. The Macro Idea is an Platform BYOB which stands
                    for BeYourOwnBoss will be a social media to give a platform
                    to entrepreneurs and investors and freelancers enhance the
                    way they regularly network and to create for themselves and
                    as our slogan says "Make it Real". I also have a ...
                  </Paragraph>
                  <TouchableOpacity>
                    <View
                      style={{
                        backgroundColor: colors.backgroundColor,
                        borderRadius: 5,
                        padding: 5,
                      }}
                    >
                      <Text
                        style={{
                          color: colors.darker_green_color,
                          fontSize: 10,
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
                        More
                      </Text>
                    </View>
                  </TouchableOpacity>
                </Card.Content>
                <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
                <Card.Actions
                  style={{ padding: 10, justifyContent: "flex-end" }}
                >
                  <ApplyButton />
                </Card.Actions>
              </Card>
            </View>

            <View style={{ marginTop: 15 }}>
              <Card style={{ borderRadius: 12 }}>
                <Card.Title
                  title="Hourly - Posted 2 hours ago"
                  subtitle="Day toan cho be"
                  right={RightContent}
                  titleStyle={{
                    fontSize: 8,
                    fontFamily: "MontserratSemiBold",
                    fontWeight: "normal",
                    color: colors.tab_color,
                    padding: 0,
                    lineHeight: 10,
                    textAlignVertical: "bottom",
                  }}
                  subtitleStyle={{
                    fontSize: 13,
                    fontFamily: "MontserratSemiBold",
                    fontWeight: "normal",
                    color: colors.primary_color,
                  }}
                />
                <Card.Content>
                  <View style={{ flexDirection: "row" }}>
                    <View
                      style={{
                        backgroundColor: colors.background_color,
                        justifyContent: "center",
                        alignItems: "center",
                        padding: 8,
                        borderRadius: 12,
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 10,
                          fontFamily: "MontserratBold",
                          fontWeight: "normal",
                        }}
                      >
                        Ha Noi
                      </Text>
                    </View>

                    <View
                      style={{
                        backgroundColor: colors.background_color,
                        justifyContent: "center",
                        alignItems: "center",
                        padding: 8,
                        borderRadius: 10,
                        marginHorizontal: 12,
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 10,
                          fontFamily: "MontserratBold",
                          fontWeight: "normal",
                        }}
                      >
                        Ha Noi
                      </Text>
                    </View>

                    <View
                      style={{
                        backgroundColor: colors.background_color,
                        justifyContent: "center",
                        alignItems: "center",
                        padding: 8,
                        borderRadius: 12,
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 10,
                          fontFamily: "MontserratBold",
                          fontWeight: "normal",
                        }}
                      >
                        Offline
                      </Text>
                    </View>
                  </View>
                  <Paragraph
                    style={{
                      fontSize: 11,
                      color: colors.secondary_information_text_color,
                    }}
                  >
                    I am looking for a Co-Founder to join me visualize an idea
                    to fruition. The Macro Idea is an Platform BYOB which stands
                    for BeYourOwnBoss will be a social media to give a platform
                    to entrepreneurs and investors and freelancers enhance the
                    way they regularly network and to create for themselves and
                    as our slogan says "Make it Real". I also have a ...
                  </Paragraph>
                  <TouchableOpacity>
                    <View
                      style={{
                        backgroundColor: colors.backgroundColor,
                        borderRadius: 5,
                        padding: 5,
                      }}
                    >
                      <Text
                        style={{
                          color: colors.darker_green_color,
                          fontSize: 10,
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
                        More
                      </Text>
                    </View>
                  </TouchableOpacity>
                </Card.Content>
                <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
                <Card.Actions
                  style={{ padding: 10, justifyContent: "flex-end" }}
                >
                  <ApplyButton />
                </Card.Actions>
              </Card>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background_color,
    flex: 1,
  },
});
