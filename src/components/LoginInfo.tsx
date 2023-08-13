import React from 'react';
import { View } from '_context/Themed';
import { MonoText as Text } from '_components/StyledText';
import { Button } from 'react-native';
import { useAuth } from 'src/store/auth.store';
import { useTranslation } from 'react-i18next';

export function LoginInfo() {
  const { t } = useTranslation();

  const logout = useAuth(({ logout }) => logout);
  const nickname = useAuth(({ user }) => user?.nickname);

  return (
    <View className="flex-1 my-4 bg-transparent gap-y-4 p-4">
      <Text className="text-lg">
        {t('auth.logged-in-as')}{' '}
        <Text className="font-semibold text-blue-500">{nickname}</Text>
      </Text>
      <Button title={t('auth.sign-out')} onPress={logout} color="red" />
    </View>
  );
}
