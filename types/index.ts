export interface InputProps {
    type: string;
    placeholder: string;
    bgColor?: string;
    width?: string;
    className?: string;
    value?: string;
    ref?: React.Ref<HTMLInputElement>;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

export interface ButtonProps {
    width: string;
    textColor?: string;
    bgColor?: string;
    IconComponent?: React.ComponentType;
    className?: string;
    onClick?: () => void;
    text: string;
    disabled?: boolean;
    type: 'button' | 'submit' | 'reset';
}

export interface AuthProps {
    authUser: string;
    setAuthUser: (value: string) => void;
}