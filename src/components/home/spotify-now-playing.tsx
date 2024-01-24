import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";

import Image from "next/image";
import { Music } from "lucide-react";

export const SpotifyNowPlaying = ({ spotifyData }: { spotifyData?: any }) => {
    if (!spotifyData) return null;

    return (
        <Card className="max-w-full break-inside-avoid">
            <CardHeader>
                <CardTitle>Currently I'm listening to</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex gap-4">
                    <Image
                        src={spotifyData.item.album.images[0].url}
                        width={200}
                        height={200}
                        alt="Spotify album cover"
                        className="w-24 h-24 rounded-lg"
                    />
                    <div className="overflow-hidden">
                        <p className="text-2xl font-semibold leading-none tracking-tight truncate overflow-hidden">
                            {spotifyData.item.name}
                        </p>
                        <p className="text-sm text-muted-foreground leading-8 truncate overflow-hidden">
                            {spotifyData.item.artists.map((artist: any) => artist.name).join(", ")}
                        </p>
                        <div className="flex gap-2 mt-4 text-sm">
                            <Music className="text-muted-foreground" size="1.25rem" />
                            <p className="text-muted-foreground">
                                Powered by{" "}
                                <a className="font-medium underline" href="https://spotify.com" target="_blank">
                                    Spotify
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};