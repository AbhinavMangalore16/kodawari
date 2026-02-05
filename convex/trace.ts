import { v } from "convex/values"
import { mutation, query } from "./_generated/server"


export const create = mutation({
  args: {
    name: v.string()
  },
  handler: async (ctx, args) =>{
    const ident = await ctx.auth.getUserIdentity();
    if (!ident){
      throw new Error("Unauthorized!")
    }
    await ctx.db.insert("traces", {
      name: args.name,
      ownerId: ident.subject,
      importStatus: "Success"
    })
  }
})

export const get = query({
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity();
    console.log(identity);
    if (!identity) throw new Error("Unauthenticated!");

    return await ctx.db
    .query("traces")
    .withIndex("by_owner", (q)=>q.eq("ownerId", identity.subject))
    .collect()
  },
});