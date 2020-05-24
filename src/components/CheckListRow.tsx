import React, { useState } from "react";
import styled from "styled-components";
import { Ionicons } from "@expo/vector-icons";
import dimensions from "../constants/dimensions";

const View = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  padding: 0 20px;
`;
const Text = styled.Text`
  width: ${dimensions.width - 100};
  flex-wrap: wrap;
`;
const Touchable = styled.TouchableOpacity``;

interface IProps {
  uuid: string;
  question: string;
  previousAnswer?: boolean;
  laterAnswer?: boolean;
  hasSubmittedPreviousCheckList: boolean;
  hasSubmittedLaterCheckList: boolean;
  onPress: (newUuid: string) => void;
}
const CheckListRow: React.FC<IProps> = ({
  uuid,
  question,
  previousAnswer,
  laterAnswer,
  hasSubmittedPreviousCheckList,
  hasSubmittedLaterCheckList,
  onPress,
}) => {
  const [isPreviousAnswerTrue, setIsPreviousAnswerTrue] = useState<boolean>(
    previousAnswer
  );
  const [isLaterAnswerTrue, setIsLaterAnswerTrue] = useState<boolean>(
    laterAnswer
  );
  if (!hasSubmittedPreviousCheckList && !hasSubmittedPreviousCheckList) {
    return (
      <View>
        <Text>{question}</Text>
        <Touchable
          onPress={() => {
            onPress(uuid);
            setIsPreviousAnswerTrue(
              (isPreviousAnswerTrue) => !isPreviousAnswerTrue
            );
          }}
        >
          {isPreviousAnswerTrue ? (
            <Ionicons name="ios-checkbox-outline" size={24} />
          ) : (
            <Ionicons name="ios-square-outline" size={28} />
          )}
        </Touchable>
      </View>
    );
  } else if (hasSubmittedPreviousCheckList && !hasSubmittedLaterCheckList) {
    return (
      <View>
        <Text>{question}</Text>
        <Touchable
          onPress={() => {
            onPress(uuid);
            setIsLaterAnswerTrue((isLaterAnswerTrue) => !isLaterAnswerTrue);
          }}
        >
          {isLaterAnswerTrue ? (
            <Ionicons name="ios-checkbox-outline" size={24} />
          ) : (
            <Ionicons name="ios-square-outline" size={28} />
          )}
        </Touchable>
      </View>
    );
  } else if (!hasSubmittedPreviousCheckList && hasSubmittedLaterCheckList) {
    return (
      <View>
        <Text>{question}</Text>
        <Touchable
          onPress={() => {
            onPress(uuid),
              setIsPreviousAnswerTrue(
                (isPreviousAnswerTrue) => !isPreviousAnswerTrue
              );
          }}
        >
          {isPreviousAnswerTrue ? (
            <Ionicons name="ios-checkbox-outline" size={24} />
          ) : (
            <Ionicons name="ios-square-outline" size={28} />
          )}
        </Touchable>
      </View>
    );
  } else {
    return (
      <View>
        {isPreviousAnswerTrue ? (
          <Ionicons
            name="ios-checkbox-outline"
            size={24}
            color={"#999"}
            style={{ marginRight: 20 }}
          />
        ) : (
          <Ionicons
            name="ios-square-outline"
            size={28}
            color={"#999"}
            style={{ marginRight: 20 }}
          />
        )}
        <Text>{question}</Text>
        {isLaterAnswerTrue ? (
          <Ionicons name="ios-checkbox-outline" size={24} color={"#999"} />
        ) : (
          <Ionicons name="ios-square-outline" size={28} color={"#999"} />
        )}
      </View>
    );
  }
};

export default CheckListRow;
