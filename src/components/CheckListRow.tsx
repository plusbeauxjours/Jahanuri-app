import React from "react";
import styled from "styled-components";
import { Ionicons } from "@expo/vector-icons";

const View = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  padding: 0 10px;
`;
const Text = styled.Text``;

interface IProps {
  uuid: string;
  question: string;
  checkListCoverUuid: string;
  previousAnswer: string;
  laterAnswer: string;
  haspreviousSubmited: boolean;
  haslaterSubmited: boolean;
}
const CheckListRow: React.FC<IProps> = ({
  uuid,
  question,
  checkListCoverUuid,
  previousAnswer,
  laterAnswer,
  haspreviousSubmited,
  haslaterSubmited,
}) => {
  if (!haspreviousSubmited && !haspreviousSubmited) {
    return (
      <View>
        <Text>{question}</Text>
        {previousAnswer ? (
          <Ionicons name="ios-checkbox-outline" size={24} />
        ) : (
          <Ionicons name="ios-square-outline" size={24} />
        )}
      </View>
    );
  } else if (haspreviousSubmited && !haslaterSubmited) {
    return (
      <View>
        <Text>{question}</Text>
        {laterAnswer ? (
          <Ionicons name="ios-checkbox-outline" size={24} />
        ) : (
          <Ionicons name="ios-square-outline" size={24} />
        )}
      </View>
    );
  } else if (!haspreviousSubmited && haslaterSubmited) {
    return (
      <View>
        <Text>{question}</Text>
        {previousAnswer ? (
          <Ionicons name="ios-checkbox-outline" size={24} />
        ) : (
          <Ionicons name="ios-square-outline" size={24} />
        )}
      </View>
    );
  } else {
    return (
      <View>
        <Text>{question}</Text>
        {previousAnswer ? (
          <Ionicons name="ios-checkbox-outline" size={24} />
        ) : (
          <Ionicons name="ios-square-outline" size={24} />
        )}
      </View>
    );
  }
};

export default CheckListRow;
