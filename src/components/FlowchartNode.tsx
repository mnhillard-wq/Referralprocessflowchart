import { ArrowDown, CheckCircle, AlertCircle, Users, FileText, ClipboardCheck, BookOpen } from 'lucide-react';
import { Card } from './ui/card';

interface FlowchartNodeProps {
  type: 'start' | 'process' | 'decision' | 'end';
  title: string;
  description?: string;
  icon?: React.ReactNode;
  variant?: 'default' | 'success' | 'warning' | 'info' | 'purple' | 'emerald' | 'violet';
  children?: React.ReactNode;
  maxWidth?: string;
  compact?: boolean;
}

export function FlowchartNode({ type, title, description, icon, variant = 'default', children, maxWidth = 'max-w-md', compact = false }: FlowchartNodeProps) {
  const getColors = () => {
    switch (variant) {
      case 'success':
        return 'bg-green-50 border-l-green-500';
      case 'warning':
        return 'bg-amber-50 border-l-amber-500';
      case 'info':
        return 'bg-blue-50 border-l-blue-500';
      case 'purple':
        return 'bg-purple-50 border-l-purple-500';
      case 'emerald':
        return 'bg-emerald-50 border-l-emerald-500';
      case 'violet':
        return 'bg-violet-50 border-l-violet-500';
      default:
        return 'bg-white border-l-gray-300';
    }
  };

  const getShape = () => {
    switch (type) {
      case 'start':
      case 'end':
        return 'rounded-full';
      case 'decision':
        return 'rotate-45';
      default:
        return 'rounded-lg';
    }
  };

  if (type === 'decision') {
    return (
      <div className="relative w-64 h-64 mx-auto">
        <div className={`absolute inset-0 ${getShape()} ${getColors()} border-l-4 shadow-xl hover:shadow-2xl transition-shadow flex items-center justify-center`}>
          <div className="transform -rotate-45 text-center p-8">
            {icon && <div className="flex justify-center mb-2">{icon}</div>}
            <div>{title}</div>
            {description && <div className="text-gray-600 mt-1">{description}</div>}
          </div>
        </div>
      </div>
    );
  }

  if (type === 'start' || type === 'end') {
    return (
      <div className={`${getShape()} ${getColors()} border-l-4 shadow-xl hover:shadow-2xl transition-shadow ${compact ? 'px-5 py-3' : 'px-8 py-6'} mx-auto w-fit`}>
        <div className={`flex items-center ${compact ? 'gap-2' : 'gap-3'}`}>
          {icon}
          <span className={compact ? 'text-sm' : ''}>{title}</span>
        </div>
      </div>
    );
  }

  return (
    <Card className={`${getColors()} border-l-4 shadow-xl hover:shadow-2xl transition-shadow ${compact ? 'p-3' : 'p-6'} w-full ${maxWidth} mx-auto`}>
      <div className={`flex flex-col items-center text-center ${compact ? 'gap-1.5' : 'gap-3'}`}>
        {icon && <div className="flex-shrink-0">{icon}</div>}
        <div className="flex-1 w-full">
          <div className={compact ? 'text-sm' : ''}>{title}</div>
          {description && <div className={`text-gray-600 ${compact ? 'mt-0.5 text-xs' : 'mt-2'}`}>{description}</div>}
          {children && <div className={compact ? 'mt-1.5' : 'mt-3'}>{children}</div>}
        </div>
      </div>
    </Card>
  );
}

export function FlowchartArrow({ label, direction = 'down', compact = false }: { label?: string; direction?: 'down' | 'left' | 'right'; compact?: boolean }) {
  if (direction === 'down') {
    return (
      <div className={`flex flex-col items-center ${compact ? 'my-1' : 'my-4'}`}>
        {label && (
          <div className="bg-gray-100 px-3 py-1 rounded mb-2">
            {label}
          </div>
        )}
        <ArrowDown className="text-gray-400" size={compact ? 24 : 32} />
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2 absolute">
      {label && (
        <div className="bg-gray-100 px-3 py-1 rounded">
          {label}
        </div>
      )}
    </div>
  );
}