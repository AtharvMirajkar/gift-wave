import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface GiftCardState {
  template: string;
  customText: string;
  recipientName: string;
  senderName: string;
  imageUrl: string;
}

const initialState: GiftCardState = {
  template: '',
  customText: '',
  recipientName: '',
  senderName: '',
  imageUrl: '',
};

const giftCardSlice = createSlice({
  name: 'giftCard',
  initialState,
  reducers: {
    setTemplate: (state, action: PayloadAction<string>) => {
      state.template = action.payload;
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
  },
});

export const {
  setTemplate,
  setCustomText,
  setRecipientName,
  setSenderName,
  setImageUrl,
} = giftCardSlice.actions;
export default giftCardSlice.reducer;