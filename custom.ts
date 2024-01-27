
/**
* このファイルを使って、独自の関数やブロックを定義してください。
* 詳しくはこちらを参照してください：https://minecraft.makecode.com/blocks/custom
*/

/**
 * Custom blocks
 */
//% weight=100 color=#0fbc11 icon="\uf06b" block="おにごっこ"
namespace custom {

    let wait_time = 0
    let p_direction = 0
    let hole_direction = 0
    let p_pos: Position = null
    let s_pos: Position = null
    let e_pos: Position = null
    let min_pos: Position = null
    let max_pos: Position = null
    let to_pos: Position = null

    let jail_min_pos: Position = null
    let jail_max_pos: Position = null


    //% blockId=speed
    //% block=すぴーど
    export function speed(): void {
        mobs.applyEffect(SPEED, mobs.target(LOCAL_PLAYER), 3, 2)
    }

    //% blockId=hole
    //% block=あな
    export function hole(): void {
        wait_time = 5000
        p_direction = player.getOrientation()
        min_pos = world(1209, 80, 1227)
        max_pos = world(1224, 0, 1239)

        // player.say(p_direction)
        if (p_direction > -45 && p_direction < 45) {
            hole_direction = 1
        } else if (p_direction >= 45 && p_direction < 135) {
            hole_direction = 2
        } else if (p_direction >= -135 && p_direction < -45) {
            hole_direction = 4
        } else {
            hole_direction = 3
        }
        p_pos = player.position()
        if (true) {
            blocks.deleteStructure(player.name())
            // player.say(hole_direction)
            // 穴の向きをhole_direction で設定
            if (!(p_pos.getValue(Axis.X) > min_pos.getValue(Axis.X) && p_pos.getValue(Axis.X) < max_pos.getValue(Axis.X) && (p_pos.getValue(Axis.Z) > min_pos.getValue(Axis.Z) && p_pos.getValue(Axis.Z) < max_pos.getValue(Axis.Z)))) {

                if (hole_direction == 1) {
                    s_pos = world(p_pos.getValue(Axis.X) + -1, p_pos.getValue(Axis.Y) + -2, p_pos.getValue(Axis.Z) + -4)
                    e_pos = world(p_pos.getValue(Axis.X) + 0, p_pos.getValue(Axis.Y) + -2, p_pos.getValue(Axis.Z) + -3)
                    blocks.saveStructure(
                        player.name(),
                        pos(-1, -2, -2),
                        pos(1, 0, -4),
                        false,
                        DISK,
                        true
                    )
                    blocks.fill(
                        AIR,
                        pos(-1, -2, -2),
                        pos(1, 0, -4),
                        FillOperation.Replace
                    )
                    loops.pause(wait_time)
                    mobs.execute(
                        mobs.near(
                            mobs.target(ALL_PLAYERS),
                            e_pos,
                            2
                        ),
                        pos(0, 0, 0),
                        "/tp ~+4 ~+4 ~"
                    )
                    blocks.loadStructure(
                        player.name(),
                        s_pos
                    )
                }
                // player.say(hole_direction)
                // 穴の向きをhole_direction で設定
                if (hole_direction == 2) {
                    s_pos = world(p_pos.getValue(Axis.X) + 2, p_pos.getValue(Axis.Y) + -2, p_pos.getValue(Axis.Z) + -1)
                    blocks.saveStructure(
                        player.name(),
                        pos(2, -2, -1),
                        pos(4, 0, 1),
                        false,
                        DISK,
                        true
                    )
                    blocks.fill(
                        AIR,
                        pos(2, -2, -1),
                        pos(4, 0, 1),
                        FillOperation.Replace
                    )
                    loops.pause(wait_time)
                    mobs.execute(
                        mobs.near(
                            mobs.target(ALL_PLAYERS),
                            s_pos,
                            4
                        ),
                        pos(0, 0, 0),
                        "/tp ~ ~+4 ~-2"
                    )
                    blocks.loadStructure(
                        player.name(),
                        s_pos
                    )
                }
                // player.say(hole_direction)
                // 穴の向きをhole_direction で設定
                if (hole_direction == 3) {
                    s_pos = world(p_pos.getValue(Axis.X) + -1, p_pos.getValue(Axis.Y) + -2, p_pos.getValue(Axis.Z) + 2)
                    blocks.saveStructure(
                        player.name(),
                        pos(-1, -2, 2),
                        pos(1, 0, 4),
                        false,
                        DISK,
                        true
                    )
                    blocks.fill(
                        AIR,
                        pos(-1, -2, 2),
                        pos(1, 0, 4),
                        FillOperation.Replace
                    )
                    loops.pause(wait_time)
                    mobs.execute(
                        mobs.near(
                            mobs.target(ALL_PLAYERS),
                            s_pos,
                            2
                        ),
                        pos(0, 0, 0),
                        "/tp ~ ~+4 ~+2"
                    )
                    blocks.loadStructure(
                        player.name(),
                        s_pos
                    )
                }
                // player.say(hole_direction)
                // 穴の向きをhole_direction で設定
                if (hole_direction == 4) {
                    s_pos = world(p_pos.getValue(Axis.X) + -4, p_pos.getValue(Axis.Y) + -2, p_pos.getValue(Axis.Z) + -1)
                    blocks.saveStructure(
                        player.name(),
                        pos(-4, -2, -1),
                        pos(-2, 0, 1),
                        false,
                        DISK,
                        true
                    )
                    blocks.fill(
                        AIR,
                        pos(-4, -2, -1),
                        pos(-2, 0, 1),
                        FillOperation.Replace
                    )
                    loops.pause(wait_time)
                    mobs.execute(
                        mobs.near(
                            mobs.target(ALL_PLAYERS),
                            s_pos,
                            2
                        ),
                        pos(0, 0, 0),
                        "/tp ~4 ~+2 ~"
                    )
                    blocks.loadStructure(
                        player.name(),
                        s_pos
                    )
                }
            }
        } else {
            player.say("しっぱい")
        }
    }
    //% blockId=jump
    //% block="じゃんぷ"
    export function jump(): void {
        mobs.applyEffect(JUMP_BOOST, mobs.target(LOCAL_PLAYER), 10, 2)
    }

    //% blockId=spy
    //% block="スパイダー"
    export function spy(): void {
        s_pos = posCamera(-1, 0, -2).toWorld()
    to_pos = posCamera(1, 0, -4).toWorld()
    blocks.replace(
    COBWEB,
    AIR,
    s_pos,
    to_pos
    )
    loops.pause(10000)
    blocks.replace(
    AIR,
    COBWEB,
    s_pos,
    to_pos
    )
    }

    //% blockId=tp
    //% block="テレポート"
    export function tp(): void {
        min_pos = world(1097, 76, 1165)
        max_pos = world(1271, 0, 1287)

        jail_min_pos = world(1126, 72, 1192)
        jail_max_pos = world(1151, 64, 1224)
        
        p_direction = player.getOrientation()
        // player.say(p_direction)
        if (p_direction > -45 && p_direction < 45) {
            hole_direction = 1
        } else if (p_direction >= 45 && p_direction < 135) {
            hole_direction = 2
        } else if (p_direction >= -135 && p_direction < -45) {
            hole_direction = 4
        } else {
            hole_direction = 3
        }
        // player.say(hole_direction)
        // 穴の向きをhole_direction で設定
        if (hole_direction == 1) {
            to_pos = pos(0, 1, 15)
        } else if (hole_direction == 2) {
            to_pos = pos(-15, 1, 0)
        } else if (hole_direction == 3) {
            to_pos = pos(0, 1, -15)
        } else if (hole_direction == 4) {
            to_pos = pos(15, 1, 0)
        } else {

        }
        to_pos = to_pos.toWorld()

        const playerPos = player.position();
        const playerX = playerPos.getValue(Axis.X);
        const playerZ = playerPos.getValue(Axis.Z);

        const jailMinX = jail_min_pos.getValue(Axis.X);
        const jailMinZ = jail_min_pos.getValue(Axis.Z);

        const jailMaxX = jail_max_pos.getValue(Axis.X);
        const jailMaxZ = jail_max_pos.getValue(Axis.Z);
        

        if ((to_pos.getValue(Axis.X) > min_pos.getValue(Axis.X) && to_pos.getValue(Axis.X) < max_pos.getValue(Axis.X) && (to_pos.getValue(Axis.Z) > min_pos.getValue(Axis.Z) && to_pos.getValue(Axis.Z) < max_pos.getValue(Axis.Z)))
        && !((playerX >= jailMinX && playerX <= jailMaxX) && (playerZ >= jailMinZ && playerZ <= jailMaxZ))
        ) {
            if (blocks.testForBlock(AIR, to_pos) && blocks.testForBlock(AIR, world(to_pos.getValue(Axis.X), to_pos.getValue(Axis.Y) + 1, to_pos.getValue(Axis.Z)))) {
                player.teleport(to_pos)
                player.say("tp")
            }
        } else {
            player.say("しっぱい")
        }
    }
}
