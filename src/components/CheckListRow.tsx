import React from "react";
import styled from "styled-components";

const View = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
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
  console.log(question);
  return (
    <View>
      <Text>{question}</Text>
    </View>
  );
};

export default CheckListRow;
