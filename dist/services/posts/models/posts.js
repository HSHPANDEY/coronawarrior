"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var postsSchema = {
    created_by_id: String,
    updated_by_id: String,
    post_data: {
        title: String,
        message: String,
        contacts: {
            number: Number,
            name: String
        }
    },
    tags: [{
            type: String
        }],
    down_vote_count: Number,
    up_vote_count: Number,
    state: String,
    state_meta_data: {
        follow_up_time: Date
    },
    locations: [{
            type: String
        }]
};
exports.default = mongoose_1.default.model('CovidPosts', new mongoose_1.default.Schema(postsSchema, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } }));
