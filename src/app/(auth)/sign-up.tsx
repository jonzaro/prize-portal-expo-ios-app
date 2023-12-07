import { useEffect } from 'react';
import { StyledText as Text } from '_components/Text/StyledText';
import {
  View,
  Button,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import { ControlledInput } from '_components/Input/ControlledInput';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAuth } from 'src/store/authStore/auth.store';
import { useTranslation } from 'react-i18next';
import { useSetTitle } from 'src/hooks/useSetTitle';
import { router } from 'expo-router';
import { emailSchema } from '_utils/auth.schema';
import { useIsFocused } from '@react-navigation/native';
import { Label } from '_components/Label/StyledLabel';
import { Alert } from '_utils/alert';
import { deviceInfo } from '_config/device';

const schema = z.object({
  email: emailSchema,
  password: z.string().min(8, 'auth.errors.password-invalid'),
  nickname: z.string().nonempty('auth.errors.nickname-required'),
});

export default function SignUp() {
  const { t } = useTranslation();
  useSetTitle(t('auth.sign-up'));

  const login = useAuth((state) => {
    return state.login;
  });

  const isFocused = useIsFocused();

  const { control, handleSubmit, reset } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      email: '',
      password: '',
      nickname: '',
    },
  });

  const register = useAuth((state) => {
    return state.register;
  });

  const onSubmit = handleSubmit((newUser) => {
    const { error } = register(newUser) ?? {};
    login(newUser);
    // <GetProductData />
    if (!error) {
      Alert.alert(t('auth.sign-up-completed'), undefined);
      return;
    }

    Alert.alert(t(error));
    reset();
  });

  useEffect(() => {
    if (!isFocused) {
      reset();
    }
  }, [isFocused]);

  return (
    <>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 400 : 0}
        style={styles.container}
      >
        <ScrollView classname="mb-64">
          <View className="flex-1 items-center p-4 gap-y-8">
            <View className="w-full bg-transparent">
              <Label htmlFor="email-sign-up" className="font-bold mb-2">
                {t('auth.email')}
              </Label>
              <ControlledInput
                id="email-sign-up"
                keyboardType="email-address"
                placeholder="shop@save.com"
                control={control}
                name="email"
              />
            </View>

            <View className="w-full bg-transparent">
              <Label htmlFor="nickname" className="font-bold mb-2">
                {t('auth.nickname')}
              </Label>
              <ControlledInput
                id="nickname"
                placeholder="SuperShopper3412"
                control={control}
                name="nickname"
              />
            </View>

            <View className="w-full bg-transparent">
              <Label htmlFor="password-sign-up" className="font-bold mb-2">
                {t('auth.password')}
              </Label>
              <ControlledInput
                id="password-sign-up"
                control={control}
                name="password"
                secureTextEntry
              />
            </View>
            <View className="mt-4 bg-transparent w-full">
              <Button
                title={t('auth.sign-up')}
                onPress={onSubmit}
                color="#315445"
              />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      <View className="justify-self-end" style={styles.bottomBanner}></View>
    </>
  );
}

const styles = StyleSheet.create({
  bottomBanner: {
    backgroundColor: '#62d2a2',
    height: '15%',
    width: 500,
  },
});
