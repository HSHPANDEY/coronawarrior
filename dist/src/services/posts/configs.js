"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PostStates;
(function (PostStates) {
    PostStates["ACTIVE"] = "active";
    PostStates["ARCHIVE"] = "archive";
    PostStates["PARK"] = "parked";
})(PostStates || (PostStates = {}));
var PostActions;
(function (PostActions) {
    PostActions["ARCHIVE"] = "archive";
    PostActions["UPVOTE"] = "upvote";
    PostActions["DOWNVOTE"] = "downvote";
    PostActions["PARK"] = "park";
})(PostActions || (PostActions = {}));
exports.default = {
    PostStates: PostStates,
    PostActions: PostActions
};
