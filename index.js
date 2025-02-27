function binaryGap(N){
    let binary = N.toString(2);


    let gaps = binary.split('1');
    if(binary.endsWith('0')){
        gaps.pop();
    }

    return gaps.length > 0 ? Math.max(...gaps.map(g=>g.length)) : 0
}
console.log(binaryGap(1041));
