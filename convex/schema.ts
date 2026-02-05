import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";


export default defineSchema({
    traces: defineTable({
        name: v.string(),
        ownerId: v.string(),
        importStatus: v.optional(v.union(
            v.literal("Importing"),
            v.literal("Success"),
            v.literal("Failure")
        ))
    }).index("by_owner", ["ownerId"])
})