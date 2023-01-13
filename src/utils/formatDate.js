export const formatDate = (date) => {
    return new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'short',
        day: '2-digit'
    }).format(new Date(Date.parse(date)));
};

export const formatDateShort = (date) => {
    return new Intl.DateTimeFormat('en-US', {
        month: 'numeric',
        day: 'numeric'
    }).format(new Date(Date.parse(date)));
};
