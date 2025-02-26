function isIpV4(ip: string): boolean {
    return ip.includes('.');
}

function isIpV6(ip: string): boolean {
    return ip.includes(':');
}

function ipNumberV4ToIpAddressV4(ipNumberV4: number) {
    const w = Math.floor(ipNumberV4 / 16777216) % 256;
    const x = Math.floor(ipNumberV4 / 65536) % 256;
    const y = Math.floor(ipNumberV4 / 256) % 256;
    const z = ipNumberV4 % 256;
    return `${w}.${x}.${y}.${z}`;
}

function ipNumberV6ToIpAddressV6(ipNumberV6: bigint) {
    const a = Number((ipNumberV6 / BigInt(65536 ** 7)) % BigInt(65536));
    const b = Number((ipNumberV6 / BigInt(65536 ** 6)) % BigInt(65536));
    const c = Number((ipNumberV6 / BigInt(65536 ** 5)) % BigInt(65536));
    const d = Number((ipNumberV6 / BigInt(65536 ** 4)) % BigInt(65536));
    const e = Number((ipNumberV6 / BigInt(65536 ** 3)) % BigInt(65536));
    const f = Number((ipNumberV6 / BigInt(65536 ** 2)) % BigInt(65536));
    const g = Number((ipNumberV6 / BigInt(65536)) % BigInt(65536));
    const h = Number(ipNumberV6 % BigInt(65536));

    return `${a.toString(16)}:${b.toString(16)}:${c.toString(16)}:${d.toString(16)}:${e.toString(16)}:${f.toString(16)}:${g.toString(16)}:${h.toString(16)}`;
}

function ipAddressV6ToIpNumberV6(ipAddressV6: string): bigint {
    const parts = ipAddressV6.split(':').map(part => parseInt(part, 16));
    let ipNumberV6 = BigInt(0);
    for (let i = 0; i < parts.length; i++) {
        ipNumberV6 += BigInt(parts[i]) * BigInt(65536 ** (7 - i));
    }
    return ipNumberV6;
}

export type IpV6Range = [bigint, bigint];

function parseRanges(data: string): IpV6Range[] {
    return data.split('\n').map(line => {
        const [from, to] = line.split(',').map(BigInt);
        return [from, to];
    });
}

function isIpInRange(ip: bigint, ranges: IpV6Range[]): boolean {
    let left = 0;
    let right = ranges.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const [start, end] = ranges[mid];

        if (ip >= start && ip <= end) {
            return true;
        } else if (ip < start) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return false;
}

export const ipV6Utils = {
    isIpV4,
    isIpV6,
    ipNumberV4ToIpAddressV4,
    ipNumberV6ToIpAddressV6,
    ipAddressV6ToIpNumberV6,
    parseRanges,
    isIpInRange,
};