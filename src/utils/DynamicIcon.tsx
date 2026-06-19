import * as LucideIcons from 'lucide-react';

type LucideIconName = keyof typeof LucideIcons;

// Type-safe dynamic icon component
export const DynamicIcon = ({ name, className }: { name: LucideIconName; className?: string }) => {
    const IconComponent = LucideIcons[name];

    // Type guard to check if component exists
    if (!IconComponent) {
        console.warn(`Icon "${name}" not found, using HelpCircle fallback`);
        return <LucideIcons.HelpCircle className={className || "w-5 h-5"} />;
    }

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    return <IconComponent className={className || "w-5 h-5"} />;
};