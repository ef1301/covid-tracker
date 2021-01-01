#include <iostream>
#include <string>
#include <fstream>
#include <sstream>

int main() {
  std::cout << "START\n";
  std::string input;
  std::ifstream myfile;
  myfile.open("states.txt");

  while(getline(myfile, input)) {
    std::istringstream ss(input);
    std::string buzz = "", abbr = "", state = "";
    ss >> state;
    ss >> buzz;

    if(buzz[0] == 39) {
      abbr = buzz;
    }

    else {
      state += " ";
      state += buzz;
      ss >> abbr;
    }
    abbr.erase(4,2);
    state.erase(0,1);
    std::cout << abbr << ": " << state << std::endl;
  }

  myfile.close();

  return 0;
}
