<?php

namespace App\Livewire;

use Livewire\Component;

class LoadingButton extends Component
{

    public $loading = false;


    public function startLoading()
    {
        $this->loading = true;
     
   
        // Simulate some processing time (you can replace this with actual processing logic)
        // sleep(10);

        // $this->loading = false;
    }
    public function render()
    {

        return view('livewire.loading-button');
    }
}
