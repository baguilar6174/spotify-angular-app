// import components
import { CardPlayerComponent } from "./card-player/card-player.component";
import { HeaderComponent } from "./header/header.component";
import { MediaplayerComponent } from "./mediaplayer/mediaplayer.component";
import { PlayListBodyComponent } from "./play-list-body/play-list-body.component";
import { PlayListHeaderComponent } from "./play-list-header/play-list-header.component";
import { SectionComponent } from "./section/section.component";
import { SidebarComponent } from "./sidebar/sidebar.component";

export const components: any[] = [
    HeaderComponent,
    MediaplayerComponent,
    SidebarComponent,
    CardPlayerComponent,
    SectionComponent,
    PlayListHeaderComponent,
    PlayListBodyComponent,
];

// export all components

export * from "./header/header.component";
export * from "./mediaplayer/mediaplayer.component";
export * from "./sidebar/sidebar.component";
export * from "./card-player/card-player.component";
export * from "./section/section.component";
export * from "./play-list-body/play-list-body.component";
export * from "./play-list-header/play-list-header.component";