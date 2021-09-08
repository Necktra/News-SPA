export function transformContentDate(contentDate) {

    const currentTime = new Date();
    const contentTime = new Date(contentDate * 1000);
    const timeDifference = currentTime - contentTime;

    if (timeDifference < 60 * 1000) {
        return "now";
    } else if (timeDifference < (60 * 60 * 1000)) {
        return Math.round(timeDifference / (60 * 1000)) + " minutes ago";
    } else if (timeDifference < (60 * 60 * 1000 * 24)) {
        return Math.round(timeDifference / (60 * 60 * 1000)) + " hours ago";
    } else if (timeDifference < (60 * 60 * 1000 * 24 * 30)) {
        return Math.round(timeDifference / (60 * 60 * 1000 * 24)) + " days ago";
    } else if (timeDifference < (60 * 60 * 1000 * 24 * 30 * 365)) {
        return Math.round(timeDifference / (60 * 60 * 1000 * 24 * 30)) + " months ago";
    } else {
        return Math.round(timeDifference / (60 * 60 * 1000 * 24 * 30 * 365)) + " years ago";
    }

}