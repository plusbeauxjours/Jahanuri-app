import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesome } from "@expo/vector-icons";
import dimensions from "../constants/dimensions";

const View = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  padding: 0 20px;
  background-color: #f2f2f2;
`;
const Text = styled.Text`
  font-weight: 100;
  font-size: 16px;
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
    // 0/2
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
            <FontAwesome name="check-square-o" color={"#999"} size={24} />
          ) : (
            <FontAwesome name="square-o" color={"#999"} size={24} />
          )}
        </Touchable>
      </View>
    );
  } else if (hasSubmittedPreviousCheckList && !hasSubmittedLaterCheckList) {
    // 1/2
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
            <FontAwesome name="check-square-o" color={"#999"} size={24} />
          ) : (
            <FontAwesome name="square-o" color={"#999"} size={24} />
          )}
        </Touchable>
      </View>
    );
  } else if (!hasSubmittedPreviousCheckList && hasSubmittedLaterCheckList) {
    // error
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
            <FontAwesome name="check-square-o" color={"#999"} size={24} />
          ) : (
            <FontAwesome name="square-o" color={"#999"} size={24} />
          )}
        </Touchable>
      </View>
    );
  } else {
    // 2/2
    return (
      <View>
        {isPreviousAnswerTrue ? (
          <FontAwesome name="check-square-o" color={"#999"} size={24} />
        ) : (
          <FontAwesome name="square-o" color={"#999"} size={24} />
        )}
        <Text>{question}</Text>
        {isLaterAnswerTrue ? (
          <FontAwesome name="check-square-o" color={"#999"} size={24} />
        ) : (
          <FontAwesome name="square-o" color={"#999"} size={24} />
        )}
      </View>
    );
  }
};

export default CheckListRow;
