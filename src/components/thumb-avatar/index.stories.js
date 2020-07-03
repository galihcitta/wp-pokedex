import React from "react";
import ThumbAvatar from "./index";
import defaultImage from "../../static/image/dummy-square.jpg";

export default { title: "Components|Thumb Avatar", component: ThumbAvatar };

export const ThumbAvatarDefault = () => {
    return (
        <div>
            <ThumbAvatar></ThumbAvatar>
        </div>
    );
};
export const ThumbAvatarWithImage = () => {
    return (
        <div>
            <ThumbAvatar image={defaultImage}></ThumbAvatar>
        </div>
    );
};
export const ThumbAvatarWithSize = () => {
    return (
        <div>
            <div style={{ marginBottom: 10 }}>
                <ThumbAvatar size="lg" image={defaultImage}></ThumbAvatar>
            </div>
            <div style={{ marginBottom: 10 }}>
                <ThumbAvatar size="md" image={defaultImage}></ThumbAvatar>
            </div>
            <div style={{ marginBottom: 10 }}>
                <ThumbAvatar size="sm" image={defaultImage}></ThumbAvatar>
            </div>
        </div>
    );
};
export const ThumbAvatarWithType = () => {
    return (
        <div>
            <div style={{ marginBottom: 10 }}>
                <ThumbAvatar
                    size="lg"
                    radius="circle"
                    image={defaultImage}
                ></ThumbAvatar>
            </div>
            <div style={{ marginBottom: 10 }}>
                <ThumbAvatar
                    size="lg"
                    radius="rounded"
                    image={defaultImage}
                ></ThumbAvatar>
            </div>
            <div style={{ marginBottom: 10 }}>
                <ThumbAvatar
                    size="lg"
                    radius="box"
                    image={defaultImage}
                ></ThumbAvatar>
            </div>
        </div>
    );
};
