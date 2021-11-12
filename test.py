print('hello world')
prev_sum = b = 1
sum = 0
final_sum = 0
  


for i in range(1,100):
    if i == 1:
        final_sum = 0
        # print(final_sum)
    else:
        temp = prev_sum
        prev_sum = final_sum
        final_sum = temp + prev_sum
       
    print(final_sum)
    

        
    
        

    
    
    
    