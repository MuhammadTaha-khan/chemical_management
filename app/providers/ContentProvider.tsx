import { textContent } from '@/content';
import { WebsiteContent } from '@/types';
import { ReactNode, createContext, useContext, useEffect, useState } from 'react';

interface ContentContextType {
    content: WebsiteContent;
    setContent: (content: WebsiteContent) => void;
    searchTerm: string;
    setSearchTerm: (searchTerm: string) => void;
    toastText: string | null;
    setToastText: (text: string | null) => void;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

interface ContentProviderProps {
    children: ReactNode;
}

export const ContentProvider = ({ children }: ContentProviderProps) => {
    const [content, setContent] = useState(textContent);
    const [searchTerm, setSearchTerm] = useState('');
    const [toastText, setToastText] = useState<string | null>(null);

    const value: ContentContextType = {
        content,
        setContent,
        searchTerm,
        setSearchTerm,
        toastText,
        setToastText
    };

    const processContent = (searchTerm: string, content: WebsiteContent) => {
        if (!searchTerm.trim()) {
            return { processedContent: content, matchCount: 0 };
        }

        let matchCount = 0; // Initialize the match count

        const processObject = (obj: any): any => {
            const processedObj: any = {};
            for (const key in obj) {
                if (key !== "stepsImages") {
                    if (typeof obj[key] === 'string' && !key.endsWith('Image') && !key.endsWith('logo')) {
                        const regex = new RegExp(searchTerm, 'gi'); // 'gi' for case-insensitive and global match
                        const processedString = obj[key].replace(regex, (match: any) => `<span class="searched-content">${match}</span>`);
                        processedObj[key] = processedString;
                        matchCount += (processedString.match(regex) || []).length; // Increment match count based on regex matches
                    } else if (Array.isArray(obj[key]) && !key.endsWith('Images')) {
                        processedObj[key] = obj[key].map((item: any) => {
                            if (typeof item === 'object' && !Array.isArray(item)) {
                                return processObject(item);
                            } else if (Array.isArray(item)) {
                                return item.map((nestedItem: any) => {
                                    if (typeof nestedItem === 'object' && !Array.isArray(nestedItem)) {
                                        return processObject(nestedItem);
                                    } else if (typeof nestedItem === 'string') {
                                        const regex = new RegExp(searchTerm, 'gi');
                                        const processedNestedString = nestedItem.replace(regex, (match: any) => `<span class="searched-content">${match}</span>`);
                                        matchCount += (processedNestedString.match(regex) || []).length; // Increment match count
                                        return processedNestedString;
                                    } else {
                                        return nestedItem;
                                    }
                                });
                            } else if (typeof item === 'string') {
                                const regex = new RegExp(searchTerm, 'gi');
                                const processedString = item.replace(regex, (match: any) => `<span class="searched-content">${match}</span>`);
                                matchCount += (processedString.match(regex) || []).length; // Increment match count
                                return processedString;
                            } else {
                                return item;
                            }
                        });
                    } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
                        processedObj[key] = processObject(obj[key]);
                    } else {
                        processedObj[key] = obj[key];
                    }
                } else {
                    processedObj[key] = obj[key];
                }
            }
            return processedObj;
        };

        const processedContent = processObject(content);
        return { processedContent, matchCount };
    };



    // Update processed content whenever search term or original content changes
    useEffect(() => {
        const term = searchTerm.trim();
        if (term.length > 0) {
            const highlightedContent = processContent(term, textContent);
            setContent(highlightedContent?.processedContent);
            setToastText(`Your search for '${term}' resulted in ${highlightedContent.matchCount} matches.`);
        } else {
            setContent(textContent);
        }
    }, [searchTerm]);

    return <ContentContext.Provider value={value}>{children}</ContentContext.Provider>;
};

export const useContent = (): ContentContextType => {
    const context = useContext(ContentContext);
    if (!context) {
        throw new Error('useContent must be used within a ContentProvider');
    }
    return context;
};
