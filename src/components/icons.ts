import { Wifi, Snowflake, Tv, Wine, Armchair, ShowerHead, Utensils, Trees, ParkingCircle, Sparkles, Check, type LucideIcon } from "lucide-react";
const map: Record<string, LucideIcon> = { Wifi, Snowflake, Tv, Wine, Armchair, ShowerHead, Utensils, Trees, ParkingCircle, Sparkles, Check };
export const getIcon = (name?: string): LucideIcon => (name && map[name]) || Check;
