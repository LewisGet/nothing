exports.restart_test = function() {

    var clean_up_map = function (world) {
        for (var xi = 0; xi < 20; xi++)
        {
            for (var yi = 0; yi < 20; yi ++)
            {
                for (var zi = 0; zi < 20; zi++)
                {
                    location = new org.bukkit.Location(world, xi - 10, yi - 10, zi - 10);

                    blocks_location.block.setTypeId(0);
                }
            }
        }
    };

    clean_up_map();

    var get_random_location = function (world) {
        var random_value = function () {
            return ((Math.random() - 0.5) * 2)
        };

        var location = new org.bukkit.Location(world, random_value() * 10, (random_value() * 10) + 5, random_value());
        var look_at = new org.bukkit.util.Vector(random_value(), random_value(), random_value());

        location.setDirection(look_at);

        return location;
    };

    var entity = org.bukkit.Bukkit.getPlayer("LewisJang");
    var world = entity.world;

    entity.setFlying(true);

    var entity_location = get_random_location();
    var blocks_location = get_random_location();

    blocks_location.block.setTypeId(35);
    blocks_location.block.setData(5);

    entity.teleport(entity_location);
};
