
print("reading file");

last_string = 'const dictionaryMap = new Map();\n'

known_letters = []

words_of_this_letter = ''
array_element = ''

with open('english_words.txt',"r") as f:
	for line in f:
		word = line.replace('\n','')
		if word.isalpha() and len(word) > 2 and word[0].islower() :
			word = word.lower()
			array_element = '"' + word + '"'
			if word[0] in known_letters:
				words_of_this_letter += ',' + array_element
			else:
				known_letters.append(word[0])
				words_of_this_letter += ']) );\n'
				last_string += words_of_this_letter
				words_of_this_letter = 'dictionaryMap.set( \'' + word[0] + '\',new Set ([' + array_element

print last_string
