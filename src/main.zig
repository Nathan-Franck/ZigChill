const std = @import("std");

pub fn main() anyerror!void {
    std.log.info("All your codebase are belong to us.", .{});
    var file = try std.fs.cwd().openFile("inputData.txt", .{});
    defer file.close();
    var length = try file.getEndPos();
    var allocator = std.heap.page_allocator;
    var buffer = try allocator.alloc(u8, length);
    _ = try file.readAll(buffer);
    std.log.info("Here's the resulting output! {s}", .{buffer});
}

test "basic test" {
    try std.testing.expectEqual(10, 3 + 7);
}
