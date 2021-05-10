import * as React from 'react';
import * as RN from 'react-native';

import * as NB from 'native-base';
import { RFValue } from 'react-native-responsive-fontsize';
import { Formik } from 'formik';

import InputBar from '../../components/InputBar';
import SocialAuthButton from '../../components/SocialAuthButton';
import { GrayColor, SecondaryColor } from '../../modules/colors';
import {
  SignUpDataSchema,
  signupInitialValues,
} from '../../modules/dataSchema';
import ButtonPrimaryBig from '../../components/ButtonPrimaryBig';
import TextLink from '../../components/TextLink';

export interface CreateAccountProps {}

export interface CreateAccounttate {}

export default function CreateAccount(props: CreateAccountProps) {
  return (
    <NB.Container style={styles.container}>
      <RN.StatusBar barStyle={'dark-content'} backgroundColor={'#fff'} />
      <NB.Content
        style={styles.content}
        contentContainerStyle={styles.contentContainerStyle}
        showsVerticalScrollIndicator={false}
      >
        <RN.View style={styles.headerWrapper}>
          <RN.Text style={styles.headerTitle}>Create Account</RN.Text>
          <RN.Text style={styles.headerSubtitle}>
            Let get you started, this will only take a few seconds.
          </RN.Text>
        </RN.View>

        <RN.View style={styles.socialWrapper}>
          <SocialAuthButton type={'google'} onPress={() => {}} />
          <SocialAuthButton type={'facebook'} onPress={() => {}} />
        </RN.View>

        <RN.View style={styles.orWrapper}>
          <RN.View style={[styles.horizontaliLine]}></RN.View>
          <RN.Text style={styles.orText}>OR</RN.Text>
          <RN.View style={styles.horizontaliLine}></RN.View>
        </RN.View>

        <RN.View style={styles.formWrapper}>
          <Formik
            validationSchema={SignUpDataSchema}
            onSubmit={(values) => console.log(JSON.stringify(values))}
            initialValues={signupInitialValues}
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
              <>
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
                  placeholder={'Phone Number'}
                  placeholderTextColor={'transparent'}
                  value={values.phoneNumber}
                  onChangeText={handleChange('phoneNumber')}
                  onBlur={() => setFieldTouched('phoneNumber')}
                  touched={touched.phoneNumber}
                  errors={errors.phoneNumber}
                  keyboardType={'phone-pad'}
                />

                <RN.View style={styles.loginWrapper}>
                  <ButtonPrimaryBig
                    title={'Create Account'}
                    onPress={() => {}}
                  />
                </RN.View>
              </>
            )}
          </Formik>
        </RN.View>
        <TextLink
          title={'I already have an account'}
          onPress={() => {}}
          containerStyles={styles.createWrapper}
        />
      </NB.Content>
    </NB.Container>
  );
}

const styles = RN.StyleSheet.create({
  container: { paddingHorizontal: RFValue(20), paddingTop: RFValue(50) },
  content: {},
  contentContainerStyle: {},
  headerWrapper: {},
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
  socialWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: RFValue(20),
  },
  horizontaliLine: {
    borderTopWidth: RFValue(1),
    borderColor: '#DFDEDE',
    flex: 1,
  },
  orText: {
    color: SecondaryColor,
    fontSize: RFValue(14),
    backgroundColor: '#FFFFFF',
    padding: RFValue(10),
  },
  orWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: RFValue(10),
    marginTop: RFValue(0),
  },
  formWrapper: { marginTop: RFValue(10), flex: 0.7 },
  already: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: RFValue(10),
  },
  loginWrapper: { marginTop: RFValue(80) },
  forgotWrapper: { alignItems: 'flex-end', marginVertical: RFValue(20) },
  createWrapper: { marginVertical: RFValue(30) },
  forgotText: { fontSize: RFValue(16), color: SecondaryColor },
});
