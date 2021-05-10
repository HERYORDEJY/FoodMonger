import * as React from 'react';
import * as RN from 'react-native';

import * as NB from 'native-base';
import { RFValue } from 'react-native-responsive-fontsize';
import { Formik } from 'formik';

import NavigationBar from '../../components/NavigationBar';
import { GrayColor, SecondaryColor } from '../../modules/colors';
import ButtonPrimaryBig from '../../components/ButtonPrimaryBig';
import {
  resetPasswordInitialValues,
  ResetPasswordDataSchema,
} from '../../modules/dataSchema';
import InputBar from '../../components/InputBar';

export interface ResetPasswordProps {}

export interface ResetPasswordState {}

export default function ResetPassword(props: ResetPasswordProps) {
  return (
    <NB.Container style={styles.container}>
      <RN.StatusBar
        transcluscent={true}
        barStyle={'dark-content'}
        backgroundColor={'transparent'}
      />
      <NavigationBar leftComponent={<NB.Icon name={'x'} type={'Feather'} />} />

      <RN.View style={styles.headerWrapper}>
        <RN.Text style={styles.headerTitle}>Reset Password</RN.Text>
        <RN.Text style={styles.headerSubtitle}>
          Create new password to access your account .
        </RN.Text>
      </RN.View>

      <RN.View style={styles.formWrapper}>
        <Formik
          initialValues={resetPasswordInitialValues}
          onSubmit={(values) => console.log(JSON.stringify(values))}
          validationSchema={ResetPasswordDataSchema}
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
              <RN.View>
                <InputBar
                  secureTextEntry={true}
                  placeholder={'Password'}
                  placeholderTextColor={'transparent'}
                  value={values.password}
                  onChangeText={handleChange('password')}
                  onBlur={() => setFieldTouched('password')}
                  touched={touched.password}
                  errors={errors.password}
                  containerStyles={{ marginBottom: RFValue(20) }}
                />

                <InputBar
                  secureTextEntry={true}
                  placeholder={'Confirm Password'}
                  placeholderTextColor={'transparent'}
                  value={values.confirmPassword}
                  onChangeText={handleChange('confirmPassword')}
                  onBlur={() => setFieldTouched('confirmPassword')}
                  touched={touched.confirmPassword}
                  errors={errors.confirmPassword}
                />
              </RN.View>

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
