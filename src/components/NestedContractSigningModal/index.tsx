import * as React from 'react';
import { View, ScrollView } from 'react-native';
import Row from './Row';

import Modal from "react-native-modal";
import Button from 'components/ui/Button';
import Text from 'components/ui/Text';
import TouchId from 'components/TouchId';

import styles from './styles';

export interface INestedContractSigningModalProps {
  onConfirm: () => void;
  onClose: () => void;
  params: IParams;
  touchIdSupport: boolean;
}
export interface IParams {
  title: string;
  field: string;
  params: INestedParams[];
  Amount: string;
  Recipient: string;
}
export interface INestedParams {
  name: string;
  text: string;
}
export default class NestedContractSigningForm extends React.Component<INestedContractSigningModalProps, {}> {
  public render() {
    const { params: { title, field, params, Amount, Recipient }, touchIdSupport } = this.props;
    console.log(touchIdSupport)
    return (
      <View style={styles.container}>
        <View style={styles.formContainer}>
          <View style={styles.titlesContainer}>
            <Text style={styles.title}>{`Signature required`}</Text>
            <Text style={styles.secondaryTitle}>Attention! This contract will withdraw money from your account</Text>
          </View>
          <ScrollView style={styles.scrollView}>
            {/* {params && params.map((item: INestedParams, i: number) => {
              return ( */}
                <Row Amount={"Amount"} Recipient={"-1221343412312400"} name={'Recipient'} text="Address of the recipient where your money will go" index={0}/>
                <Row Amount={"Amount"} Recipient={"1"} name={'Amount'} text="How much money will be deducted from your account" index={1}/>
                <Row Amount={"Amount"} Recipient={"-1221343412312400"} name={'Recipient'} text="Address of the recipient where your money will go" index={0}/>
                <Row Amount={"Amount"} Recipient={"1"} name={'Amount'} text="How much money will be deducted from your account" index={1}/>
              {/* );
            })} */}
          </ScrollView>
          <View style={styles.buttonsContainer}>
            {!touchIdSupport
              ? (
                <Button
                  onPress={this.props.onConfirm}
                  buttonStyle={[styles.button, styles.leftButton]}
                  title="OK" />
              )
              : (
                <TouchId
                  onSuccess={this.props.onConfirm}
                  onFail={this.props.onClose}
                  reason="Sign contract ?"
                  CustomButton={(onPress: any) => (
                    <Button
                      onPress={onPress}
                      buttonStyle={[styles.button, styles.leftButton]}
                      title="OK" />
                  )} />
              )
            }
            <Button
              onPress={this.props.onClose}
              buttonStyle={styles.button}
              title="CANCEL" />
          </View>
        </View>
      </View>
    );
  }
}
