import { Emotion } from "./emotion";
import { Journal } from "./journal";

export interface EmotionAnalysis {
  analysis_id: number;
  probability: number;
  journal_id: number;
  emotion_id: number;
  journal?: Journal;
  emotion?: Emotion;
}