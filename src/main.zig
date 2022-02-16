const std = @import("std");

var what = std.meta.Struct;

fn describeType(comptime obj: type) type {
    var fields = @typeInfo(obj).Struct.fields;
    var description: []const u8 = "\n\tfields: ";
    for (fields) |field, index| {
        description = description ++ (if (index > 0) ", " else "") ++ field.name;
    }
    var decls = @typeInfo(obj).Struct.decls;
    description = description ++ "\n\tdeclarations: ";
    var functionDescription: []const u8 = "";
    for (decls) |decl| {
        functionDescription = switch (decl.data) {
            .Fn => functionDescription ++ (if (functionDescription.len > 0) ", " else "") ++ decl.name,
            else => functionDescription,
        };
    }
    description = description ++ functionDescription;
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
