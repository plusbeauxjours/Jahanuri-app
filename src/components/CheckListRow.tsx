import React, { useState } from "react";
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
const Touchable = styled.TouchableOpacity``;

interface IProps {
  uuid: string;
  question: string;
  previousAnswer: boolean;
  laterAnswer: boolean;
  haspreviousSubmited: boolean;
  haslaterSubmited: boolean;
  onPress: (newUuid: string) => void;
}
const CheckListRow: React.FC<IProps> = ({
  uuid,
  question,
  previousAnswer,
  laterAnswer,
  haspreviousSubmited,
  haslaterSubmited,
  onPress,
}) => {
  const [isPreviousAnswerTrue, setIsPreviousAnswerTrue] = useState<boolean>(
    previousAnswer
  );
  const [isLaterAnswerTrue, setIsLaterAnswerTrue] = useState<boolean>(
    laterAnswer
  );
  if (!haspreviousSubmited && !haspreviousSubmited) {
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
  } else if (haspreviousSubmited && !haslaterSubmited) {
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
  } else if (!haspreviousSubmited && haslaterSubmited) {
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
