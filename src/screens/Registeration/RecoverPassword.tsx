import * as React from 'react';
import * as RN from 'react-native';

import * as NB from 'native-base';
import { RFValue } from 'react-native-responsive-fontsize';
import { Formik } from 'formik';

import NavigationBar from '../../components/NavigationBar';
import { GrayColor, SecondaryColor } from '../../modules/colors';
import ButtonPrimaryBig from '../../components/ButtonPrimaryBig';
import {
  signinInitialValues,
  SignInDataSchema,
} from '../../modules/dataSchema';
import InputBar from '../../components/InputBar';

export interface RecoverPasswordProps {}

export interface RecoverPasswordState {}

export default function RecoverPassword(props: RecoverPasswordProps) {
  return (
    <NB.Container style={styles.container}>
      <RN.StatusBar
        translucent={true}
        barStyle={'dark-content'}
        backgroundColor={'transparent'}
      />
      <NavigationBar leftComponent={<NB.Icon name={'x'} type={'Feather'} />} />

      <RN.View style={styles.headerWrapper}>
        <RN.Text style={styles.headerTitle}>Recover Password</RN.Text>
        <RN.Text style={styles.headerSubtitle}>
          Worry less recover it back in few seconds
        </RN.Text>
      </RN.View>

      <RN.View style={styles.formWrapper}>
        <Formik
          initialValues={signinInitialValues}
          onSubmit={(values) => console.log(JSON.stringify(values))}
          validationSchema={SignInDataSchema}
        >
          {({
            values,
            handleChange,
            errors,
            setFieldTouched,
            touched,
            isValid,
            handleSubmit,
          }) => (
            <RN.View
              style={{
                justifyContent: 'space-between',
                flex: 1,
              }}
            >
              <InputBar
                placeholder={'Email Address'}
                placeholderTextColor={'transparent'}
                keyboardType={'email-address'}
                value={values.email}
                onChangeText={handleChange('email')}
                onBlur={() => setFieldTouched('email')}
                touched={touched.email}
                errors={errors.email}
                containerStyles={{ marginBottom: RFValue(20) }}
              />

              <RN.View style={styles.continueWrapper}>
                <ButtonPrimaryBig
                  title={'Continue'}
                  containerStyles={{ marginVertical: RFValue(20) }}
                  onPress={() => {}}
                />
              </RN.View>
            </RN.View>
          )}
        </Formik>
      </RN.View>
    </NB.Container>
  );
}

const styles = RN.StyleSheet.create({
  container: { paddingHorizontal: RFValue(20), flex: 1 },
  content: {},
  contentContainerStyle: {},

  headerWrapper: { marginTop: RFValue(10) },
  headerTitle: {
    fontFamily: 'Avenir-Bold',
    fontSize: RFValue(24),
    color: SecondaryColor,
    paddingBottom: RFValue(10),
  },
  headerSubtitle: {
    fontFamily: 'Avenir-Regular',
    fontSize: RFValue(14),
    color: GrayColor,
  },
  formWrapper: { marginTop: RFValue(50), flex: 1 },
  continueWrapper: { bottom: 0, position: 'relative' },
});
