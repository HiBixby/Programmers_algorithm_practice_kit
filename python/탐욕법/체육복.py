def solution(n, lost, reserve):
    lost_set = set(lost)-set(reserve)
    reserve_set = set(reserve)-set(lost)

    for x in reserve_set:
        if x-1 in lost_set:
            lost_set.remove(x-1)
        elif x+1 in lost_set:
            lost_set.remove(x+1)

    answer = n-len(lost_set)
    return answer


print(solution(5, [2, 4], [1, 3, 5]))  # 5
print(solution(5, [2, 4], [3]))
print(solution(3, [3], [1]))
