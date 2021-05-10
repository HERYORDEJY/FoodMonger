import * as React from 'react';
import * as RN from 'react-native';

import * as NB from 'native-base';
import { RFValue } from 'react-native-responsive-fontsize';
import { Formik } from 'formik';

import NavigationBar from '../../components/NavigationBar';
import { SecondaryColor } from '../../modules/colors';
import InputBar from '../../components/InputBar';
import ButtonPrimaryBig from '../../components/ButtonPrimaryBig';
import {
  AccountSettingsDataSchema,
  accountSettingsInitialValues,
} from '../../modules/dataSchema';

export interface AccountSetingsProps {}

export interface AccountSetingsState {}

export default function AccountSetings(props: AccountSetingsProps) {
  return (
    <NB.Container style={styles.container}>
      <RN.StatusBar
        translucent={true}
        barStyle={'dark-content'}
        backgroundColor={'transparent'}
      />
      <NavigationBar title={'Account Settings'} />
      <NB.Content
        style={styles.content}
        contentContainerStyle={styles.contentContainerStyle}
      >
        <RN.View style={styles.imageWrapper}>
          <RN.View style={styles.imageSubWrapper}>
            <NB.Thumbnail
              source={require('../../assets/images/user2.jpg')}
              style={styles.thumbnail}
              circular={true}
              large={true}
            />
            <RN.View style={styles.overlay} />
          </RN.View>

          <RN.Pressable style={styles.addPhotoWrapper}>
            <NB.Icon
              name={'camera'}
              type={'Feather'}
              style={styles.addphotoIcon}
            />
          </RN.Pressable>
        </RN.View>

        <RN.View style={styles.formWrapper}>
          <Formik
            validationSchema={AccountSettingsDataSchema}
            onSubmit={(values) => console.log(JSON.stringify(values))}
            initialValues={accountSettingsInitialValues}
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
                  placeholder={'Full Name'}
                  placeholderTextColor={'transparent'}
                  value={values.fullname}
                  onChangeText={handleChange('fullname')}
                  onBlur={() => setFieldTouched('fullname')}
                  touched={touched.fullname}
                  errors={errors.fullname}
                  containerStyles={{ marginBottom: RFValue(20) }}
                />
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
                  placeholder={'Date of Birth'}
                  placeholderTextColor={'transparent'}
                  value={values.dateOfBirth}
                  onChangeText={handleChange('dateOfBirth')}
                  onBlur={() => setFieldTouched('dateOfBirth')}
                  touched={touched.dateOfBirth}
                  errors={errors.dateOfBirth}
                  keyboardType={'phone-pad'}
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

                <RN.View style={styles.updateWrapper}>
                  <ButtonPrimaryBig title={'Update'} onPress={() => {}} />
                </RN.View>
              </RN.View>
            )}
          </Formik>
        </RN.View>
      </NB.Content>
    </NB.Container>
  );
}

const styles = RN.StyleSheet.create({
  container: {
    paddingVertical: RFValue(30),
    paddingHorizontal: RFValue(20),
    flex: 1,
  },
  content: { flex: 1 },
  contentContainerStyle: {},
  imageWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: RFValue(20),
  },
  thumbnail: {
    width: RFValue(109),
    height: RFValue(109),
    borderRadius: RFValue(109 / 2),
  },
  imageSubWrapper: {
    width: RFValue(109),
    height: RFValue(109),
    borderRadius: RFValue(109 / 2),
  },
  overlay: {
    ...RN.StyleSheet.absoluteFillObject,
    backgroundColor: SecondaryColor + '50',
    borderRadius: RFValue(109 / 2),
  },
  addPhotoWrapper: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addphotoIcon: { width: RFValue(24), height: RFValue(24), color: '#FFFFFF' },
  formWrapper: { marginTop: RFValue(10), flex: 0.7 },
  updateWrapper: { position: 'relative', bottom: 0, marginTop: RFValue(20) },
});
