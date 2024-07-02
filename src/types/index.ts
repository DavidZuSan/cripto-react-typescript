import { z } from 'zod';
import { CurrencySchema, CryptoCurrencyResponseSchema, PairSchema } from "../schema/cypto-schema";

export type Currency = z.infer<typeof CurrencySchema>
export type CryptoCurrency = z.infer<typeof CryptoCurrencyResponseSchema>
export type Pair = z.infer<typeof PairSchema>