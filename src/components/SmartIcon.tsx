/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  Clock,
  VolumeX,
  Home,
  Bed,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Compass,
  FileText,
  AlertTriangle,
  Key,
  Check,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  Send,
  Car,
  Plane,
  Map,
  Coffee,
  Tv,
  Wifi,
  Sparkles,
  Users,
  HeartHandshake,
  Menu,
  X,
  Mail,
  CalendarDays,
  Utensils
} from 'lucide-react';

const iconMap = {
  Clock,
  VolumeX,
  Home,
  Bed,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Compass,
  FileText,
  AlertTriangle,
  Key,
  Check,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  Send,
  Car,
  Plane,
  Map,
  Coffee,
  Tv,
  Wifi,
  Sparkles,
  Users,
  HeartHandshake,
  Menu,
  X,
  Mail,
  CalendarDays,
  Utensils
};

export type IconName = keyof typeof iconMap;

interface SmartIconProps {
  name: IconName;
  className?: string;
}

export function SmartIcon({ name, className = "w-5 h-5" }: SmartIconProps) {
  const SelectedIcon = iconMap[name] || AlertTriangle;
  return <SelectedIcon className={className} />;
}
