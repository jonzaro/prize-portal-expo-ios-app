import { useState, useEffect } from 'react';
import { StyledText as Text } from '_components/Text/StyledText';
import {
  View,
  Button,
  Pressable,
  ScrollView,
  StyleSheet,
  KeyboardAvoidingView,
} from 'react-native';
import { ControlledInput } from '_components/Input/ControlledInput';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAuth } from 'src/store/authStore/auth.store';
import { useTranslation } from 'react-i18next';
import { useSetTitle } from 'src/hooks/useSetTitle';
import { ResetPasswordModal } from 'src/components/ResetPasswordModal';
import { useIsFocused } from '@react-navigation/native';
import { emailSchema } from '_utils/auth.schema';
import { deviceInfo } from '_config/device';
import { Label } from '_components/Label/StyledLabel';
import { Alert } from '_utils/alert';

const schema = z.object({
  email: emailSchema,
  password: z.string().min(8, 'auth.errors.password-invalid'),
});

export default function SignIn() {
  const { t } = useTranslation();
  useSetTitle(t('auth.sign-in'));

  const isFocused = useIsFocused();

  const [modalResetOpen, setModalResetOpen] = useState(false);

  const { control, handleSubmit, reset } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const login = useAuth((state) => {
    return state.login;
  });

  const onSubmit = handleSubmit((credentials) => {
    const { error } = login(credentials) ?? {};

    if (!error) {
      return;
    }

    Alert.alert(t(error));
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
        keyboardVerticalOffset={Platform.OS === 'ios' ? 200 : 0}
        style={styles.container}
      >
        <ScrollView classname="mb-64">
          <View className="flex-1 items-center p-4 gap-y-8">
            <View className="w-full bg-transparent">
              <Label htmlFor="email-sign-in" className="font-bold mb-2 ">
                {t('auth.email')}
              </Label>
              <ControlledInput
                id="email-sign-in"
                keyboardType="email-address"
                placeholder="save@shop.com"
                control={control}
                name="email"
              />
            </View>
            <View className="w-full bg-transparent">
              <Label htmlFor="password-sign-in" className="font-bold mb-2">
                {t('auth.password')}
              </Label>
              <ControlledInput
                id="password-sign-in"
                className="mb-11"
                control={control}
                name="password"
                secureTextEntry
              />
            </View>
            <Button
              title={t('auth.sign-in')}
              onPress={onSubmit}
              color="#315445"
            />

            <Text>
              <Pressable onPress={() => setModalResetOpen(true)}>
                <Text>{t('auth.reset-password')}</Text>
              </Pressable>

              <ResetPasswordModal
                visible={modalResetOpen}
                close={() => setModalResetOpen(false)}
              />
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>

      <View style={styles.bottomBanner}></View>
    </>
  );
}

const styles = StyleSheet.create({
  bottomBanner: {
    backgroundColor: '#62d2a2',
    height: 130,
    width: 500,
  },
  container: {
    flex: 1,
  },
});
