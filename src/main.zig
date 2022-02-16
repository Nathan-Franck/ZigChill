const std = @import("std");

fn describeType(comptime obj: type) type {
    var fields = @typeInfo(obj).Struct.fields;
    var description: []const u8 = "fields: ";
    for (fields) |field, index| {
        description = description ++ (if (index > 0) ", " else "") ++ field.name;
    }
    @compileError(description);
}

pub fn main() anyerror!void {
    std.log.info("All your codebase are belong to us.", .{});
    var file = try std.fs.cwd().openFile("inputData.txt", .{});
    defer file.close();
    var length = try file.getEndPos();
    var allocator = std.heap.page_allocator;
    // Should be some means of displaying what methods can be called from allocator, since the current tooling doesn't give me anything to work with.
    describeType(@TypeOf(allocator));

    var buffer = try allocator.alloc(u8, length);
    _ = try file.readAll(buffer);
    std.log.info("Here's the resulting output!\n{s}", .{buffer});
}

test "basic test" {
    try std.testing.expectEqual(10, 3 + 7);
}
