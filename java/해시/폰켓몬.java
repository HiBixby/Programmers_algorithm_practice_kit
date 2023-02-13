import java.util.*;
import java.util.stream.Collectors;

class 폰켓몬 {
    public int solution(int[] nums) {
        HashSet<Integer> pocketmonSet = new HashSet<Integer>(Arrays.stream(nums).boxed().collect(Collectors.toList()));
        return Math.min(pocketmonSet.size(), nums.length / 2);
    }

    public static void main(String[] args) {
        폰켓몬 p = new 폰켓몬();
        System.out.println(p.solution(new int[] { 3, 1, 2, 3 }));

    }
}