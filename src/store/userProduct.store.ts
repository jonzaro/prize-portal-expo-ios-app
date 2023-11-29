import { create } from 'zustand';
import type { PromoCoupon, ProductType } from '../utils/types';

type UserProductState = {
  loyaltyGift?: ProductType;
  pointsRedemptionItem?: ProductType;
  promoCoupon?: PromoCoupon;
};

type UserProductActions = {
  setLoyaltyGift: (loyaltyGift: ProductType) => void;
  setPointsRedemptionItem: (pointsRedemptionItem: ProductType) => void;
  setPromoCoupon: (promoCoupon: PromoCoupon) => void;
};

export const useUserProductStore = create<
  UserProductState & UserProductActions
>((set) => ({
  loyaltyGift: undefined,
  pointsRedemptionItem: undefined,
  promoCoupon: undefined,

  setLoyaltyGift: (loyaltyGift: ProductType) => set(() => ({ loyaltyGift })),
  setPointsRedemptionItem: (pointsRedemptionItem: ProductType) =>
    set(() => ({ pointsRedemptionItem })),
  setPromoCoupon: (promoCoupon: PromoCoupon) => set(() => ({ promoCoupon })),
}));
