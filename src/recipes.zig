const Recipe = struct {
    name: []const u8,
    ingredients: []const struct {
        name: []const u8,
        quantity: union {
            Cups: f16,
            Litres: f16,
            Millilitres: f16,
            Ounces: f16,
        },
    },
    tools: []const struct {
        name: []const u8,
    },
};

pub const recipes: []const Recipe = &[_]Recipe{
    Recipe{
        .name = "Pasta with Shrimp",
        .asdf = "what",
    },
};
