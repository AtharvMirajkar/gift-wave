import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface GiftCardState {
  template: string;
  customText: string;
  recipientName: string;
  senderName: string;
  imageUrl: string;
  primaryColor: string;
  secondaryColor: string;
  textColor: string;
}

const getDefaultColors = (template: string) => {
  switch (template) {
    case 'birthday':
      return {
        primaryColor: '#EC4899',
        secondaryColor: '#8B5CF6',
        textColor: '#FFFFFF'
      };
    case 'anniversary':
      return {
        primaryColor: '#EF4444',
        secondaryColor: '#EC4899',
        textColor: '#FFFFFF'
      };
    case 'event':
      return {
        primaryColor: '#0EA5E9',
        secondaryColor: '#6366F1',
        textColor: '#FFFFFF'
      };
    default:
      return {
        primaryColor: '#EC4899',
        secondaryColor: '#8B5CF6',
        textColor: '#FFFFFF'
      };
  }
};

const initialState: GiftCardState = {
  template: '',
  customText: '',
  recipientName: '',
  senderName: '',
  imageUrl: '',
  ...getDefaultColors('')
};

const giftCardSlice = createSlice({
  name: 'giftCard',
  initialState,
  reducers: {
    setTemplate: (state, action: PayloadAction<string>) => {
      state.template = action.payload;
      const defaultColors = getDefaultColors(action.payload);
      state.primaryColor = defaultColors.primaryColor;
      state.secondaryColor = defaultColors.secondaryColor;
      state.textColor = defaultColors.textColor;
    },
    setCustomText: (state, action: PayloadAction<string>) => {
      state.customText = action.payload;
    },
    setRecipientName: (state, action: PayloadAction<string>) => {
      state.recipientName = action.payload;
    },
    setSenderName: (state, action: PayloadAction<string>) => {
      state.senderName = action.payload;
    },
    setImageUrl: (state, action: PayloadAction<string>) => {
      state.imageUrl = action.payload;
    },
    setPrimaryColor: (state, action: PayloadAction<string>) => {
      state.primaryColor = action.payload;
    },
    setSecondaryColor: (state, action: PayloadAction<string>) => {
      state.secondaryColor = action.payload;
    },
    setTextColor: (state, action: PayloadAction<string>) => {
      state.textColor = action.payload;
    },
    resetColors: (state) => {
      const defaultColors = getDefaultColors(state.template);
      state.primaryColor = defaultColors.primaryColor;
      state.secondaryColor = defaultColors.secondaryColor;
      state.textColor = defaultColors.textColor;
    },
  },
});

export const {
  setTemplate,
  setCustomText,
  setRecipientName,
  setSenderName,
  setImageUrl,
  setPrimaryColor,
  setSecondaryColor,
  setTextColor,
  resetColors,
} = giftCardSlice.actions;
export default giftCardSlice.reducer;