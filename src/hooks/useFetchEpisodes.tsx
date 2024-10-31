import { useEffect, useState } from 'react';
import { Episode } from '../types';

const useFetchEpisodes = (episodeUrls: string[]) => {
    const [episodeData, setEpisodeData] = useState<Episode[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchEpisodes = async () => {
            if (episodeUrls.length > 0) {
                const episodePromises = episodeUrls.map(async (episodeUrl) => {
                    const response = await fetch(episodeUrl);
                    if (!response.ok) throw new Error("Network response was not ok");
                    return response.json();
                });

                try {
                    setLoading(true);
                    const episodes = await Promise.all(episodePromises);
                    setEpisodeData(episodes);
                } catch (error) {
                    setError((error as Error).message);
                } finally {
                    setLoading(false);
                }
            }
        };

        fetchEpisodes();
    }, [episodeUrls]);

    return { episodeData, loading, error };
};

export default useFetchEpisodes;
