def balance_parens(str):
    no_more_paren = False
    bracket_is_open = False
    final_string = ""

    # Iterates through the string, and tracks whether the bracket is open or closed
    for i in range(0, len(str)):
        if str.find(")", i) == -1:
            no_more_paren = True
        if str[i] == "(" and no_more_paren == True:
            continue
        elif  str[i] == "(" and bracket_is_open == False:
            bracket_is_open = True
            final_string += "("
        elif str[i] == "(" and bracket_is_open == True:
            continue
        elif str[i] == ")" and bracket_is_open == False:
            continue
        elif str[i] == ")" and bracket_is_open == True:
            bracket_is_open = False
            final_string += ")"
        else:
            final_string += str[i]
    return final_string

